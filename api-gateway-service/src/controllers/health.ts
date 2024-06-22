import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

export const healthCheck = (_req: Request, res: Response): void => {
    res.status(StatusCodes.OK).send('API Gateway service status is OK.');
}