import express, { Router } from 'express';
import { create } from '@controllers/register';
import { read } from '@controllers/login';

const router: Router = express.Router();

export function authRoutes(): Router {
  router.post('/register', create);
  router.post('/login', read);

  return router;
}
