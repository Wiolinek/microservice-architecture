import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { AxiosResponse } from 'axios';
import { loginFunction } from '@services/api/auth';

export const login = async (req: Request, res: Response): Promise<void> => {
  const response: AxiosResponse = await loginFunction(req.body);
  const { message, user, token } = response.data;
  req.session = { jwt: token };
  res.status(StatusCodes.OK).json({ message, user });
};
