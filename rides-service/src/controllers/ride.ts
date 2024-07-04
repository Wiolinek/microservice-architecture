import { getRideById } from '@services/ride';
import { Ride } from '@interfaces/rides';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

export const RideById = async (req: Request, res: Response): Promise<void> => {
  const ride: Ride = await getRideById(req.params.rideId);
  res.status(StatusCodes.OK).json({ message: 'Get ride by id', ride });
};
