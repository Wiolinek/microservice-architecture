import { getRides } from '@services/rides';
import { Ride } from '@interfaces/rides';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

export const Rides = async (_req: Request, res: Response): Promise<void> => {
  const rides: Ride[] = await getRides();
  res.status(StatusCodes.OK).json({ message: 'Rides', rides });
};
