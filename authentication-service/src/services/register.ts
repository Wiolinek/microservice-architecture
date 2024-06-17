import { Model } from 'sequelize';
import { omit } from 'lodash';
import { winstonLogger } from '@authentication-service/logger';
import { Logger } from 'winston';
import { AuthModel } from '@models/auth';
import { AuthDocument, AuthUserMessageDetails } from '@interfaces/auth';
import config from '@authentication-service/config';
import { publishDirectMessage } from '@authentication-service/queues/producer';
import { authenticationChannel } from '@authentication-service/server';

const log: Logger = winstonLogger(`${config.ELASTIC_SEARCH_URL}`, 'authService', 'debug');

export const registerUser = async (data: AuthDocument): Promise<AuthDocument | undefined> => {
  try {
    const result: Model = await AuthModel.create(data);
    const messageDetails: AuthUserMessageDetails = {
      name: result.dataValues.username!,
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
    const userData: AuthDocument = omit(result.dataValues, ['password']) as AuthDocument;
    return userData;
  } catch (error) {
    log.error(error);
  }
}
