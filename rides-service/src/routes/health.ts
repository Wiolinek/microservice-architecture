import express, { Router } from 'express';
import { Health } from '@rides-service/controllers/health';

const router: Router = express.Router();

export function healthRoute(): Router {
  router.get('/authentication-health', Health);

  return router;
}