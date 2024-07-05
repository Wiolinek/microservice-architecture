import express, { Router } from 'express';
import { register } from '@controllers/register';
import { login } from '@controllers/login';

const router: Router = express.Router();

export function authRoutes(): Router {
  router.post('/register', register);
  router.post('/login', login);

  return router;
}
