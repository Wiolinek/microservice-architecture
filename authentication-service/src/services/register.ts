import { Model, Op } from 'sequelize';
import { omit } from 'lodash';
import { winstonLogger } from '@authentication-service/logger';
import { Logger } from 'winston';
import { AuthModel } from '@models/auth';
import { RegisterData, UserData, AuthUserMessageDetails } from '@interfaces/auth';
import { lowerCase } from '@authentication-service/helpers/helpers';
import config from '@authentication-service/config';
import { publishDirectMessage } from '@authentication-service/queues/producer';
import { authenticationChannel } from '@authentication-service/server';
import { sign } from 'jsonwebtoken';

const log: Logger = winstonLogger(`${config.ELASTIC_SEARCH_URL}`, 'authService', 'debug');

export const registerFunction = async (data: RegisterData): Promise<RegisterData | undefined> => {
  try {
    const result: Model = await AuthModel.create(data);
    const messageDetails: AuthUserMessageDetails = {
      name: result.dataValues.name!,
      email: result.dataValues.email!,
      createdAt: result.dataValues.createdAt!,
      type: 'auth',
    };
    await publishDirectMessage(
      authenticationChannel,
      'user-update',
      'user',
      JSON.stringify(messageDetails),
      'User details sent to user service.'
    );
    const userData: RegisterData = omit(result.dataValues, ['password']) as RegisterData;
    return userData;
  } catch (error) {
    log.error(error);
  }
};

export async function getUserByEmail(email: string): Promise<UserData | undefined> {
  try {
    const user: Model = (await AuthModel.findOne({
      where: {
        [Op.or]: [{ email: lowerCase(email) }],
      },
    })) as Model;
    return user?.dataValues;
  } catch (error) {
    log.error(error);
  }
}

export function signToken(id: number, email: string, username: string): string {
  return sign(
    {
      id,
      email,
      username,
    },
    config.JWT_TOKEN!
  );
}
