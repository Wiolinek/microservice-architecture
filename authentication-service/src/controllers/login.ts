import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { omit } from 'lodash';
import { AuthModel } from '@authentication-service/models/auth';
import { loginFormSchema } from '@authentication-service/schema/loginFormSchema';
import { getUserByEmail, signToken } from '@authentication-service/services/register';
import { UserData } from '@interfaces/auth';

export const login = async (req: Request, res: Response): Promise<void> => {
  const { error } = await Promise.resolve(loginFormSchema.validate(req.body));
  if (error?.details) {
    throw new Error(`${error.details[0].message}, SignIn read() method error`);
  }
  const { email, password } = req.body;
  const existingUser: UserData | undefined = await getUserByEmail(email);
  if (!existingUser) {
    throw new Error('Invalid credentials, SignIn read() method error');
  }
  const passwordsMatch: boolean = await AuthModel.prototype.passwordCheck(password, `${existingUser.password}`);
  if (!passwordsMatch) {
    throw new Error('Invalid credentials, SignIn read() method error');
  }
  const userJWT = signToken(existingUser.id!, existingUser.email!, existingUser.name!);
  const userData: UserData | null = omit(existingUser, ['password']);
  res.status(StatusCodes.OK).json({ message: 'User login successfully', user: userData, token: userJWT });
};
