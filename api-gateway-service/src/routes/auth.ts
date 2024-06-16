import express, { Router } from 'express';
import { Register } from '@controllers/auth/register';
import { Login } from '@controllers/auth/login';

const router: Router = express.Router();

export function routes(): Router {
  router.post('/auth/register', Register);
  router.post('auth/login', Login);

  return router;
}
