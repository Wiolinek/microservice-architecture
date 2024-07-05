import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { AxiosResponse } from 'axios';
import { registerFunction } from '@services/api/auth';

export const register = async (req: Request, res: Response): Promise<void> => {
  const response: AxiosResponse = await registerFunction(req.body);
  req.session = { jwt: response.data.token };
  res.status(StatusCodes.CREATED).json({ message: response.data.message, user: response.data.user });
};
