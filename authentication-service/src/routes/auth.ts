import express, { Router } from 'express';
import { Register } from '@controllers/register';
import { Login } from '@controllers/login';

const router: Router = express.Router();

export function authRoutes(): Router {
  router.post('/register', Register);
  router.post('/login', Login);

  return router;
}
