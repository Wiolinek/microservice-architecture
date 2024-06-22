import express, { Router } from 'express';
import { register } from '@controllers/auth/register';
import { login } from '@controllers/auth/login';

const router: Router = express.Router();

export function routes(): Router {
  router.post('/auth/register', register);
  router.post('auth/login', login);

  return router;
}
