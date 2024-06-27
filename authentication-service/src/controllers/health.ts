import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

export const Health = (_req: Request, res: Response): void => {
  res.status(StatusCodes.OK).send('Authentication service status is OK.');
}