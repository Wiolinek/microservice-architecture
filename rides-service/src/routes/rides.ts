import express, { Router } from 'express';
import { rides } from '@controllers/rides';
import { rideById } from '@controllers/ride';
import { addRide } from '@controllers/addRide';
import { bookRide } from '@controllers/bookRide';

const router: Router = express.Router();

export function ridesRoutes(): Router {
  router.get('/rides', rides);
  router.get('/rides/:rideId', rideById);
  router.post('/add-ride', addRide);
  router.put('/booking/:rideId', bookRide);

  return router;
}
