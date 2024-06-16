import { loginFunction } from '@services/api/auth';
import { AxiosResponse } from 'axios';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

export const Login = async (req: Request, res: Response): Promise<void> => {
  const response: AxiosResponse = await loginFunction(req.body);
  const { message, user, token } = response.data;
  req.session = { jwt: token };
  res.status(StatusCodes.OK).json({ message, user });
};
