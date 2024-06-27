import express, { Router } from 'express';
import { Rides } from '@controllers/rides';
import { Ride } from '@controllers/ride';
import { AddRide } from '@controllers/addRide';
import { BookRide } from '@controllers/bookRide';

const router: Router = express.Router();

export function ridesRoutes(): Router {
  router.get('/rides', Rides);
  router.get('/rides/:rideId', Ride);
  router.post('/add-ride', AddRide);
  router.put('/booking/:rideId', BookRide);

  return router;
}
