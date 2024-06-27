import { getRidesFunction } from '@services/api/rides';
import { AxiosResponse } from 'axios';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

export const getRides = async (req: Request, res: Response): Promise<void> => {
  const response: AxiosResponse = await getRidesFunction();

};
