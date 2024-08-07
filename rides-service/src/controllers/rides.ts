import { getRides } from '@services/rides';
import { Ride } from '@interfaces/rides';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

export const rides = async (_req: Request, res: Response): Promise<void> => {
  const ridesData: Ride[] = await getRides();
  res.status(StatusCodes.OK).json({ message: 'Rides', ridesData });
};
