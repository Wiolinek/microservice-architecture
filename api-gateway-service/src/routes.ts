import { Application } from 'express';
import { healthRoutes } from '@api-gateway-service/routes/health';
import { routes } from '@api-gateway-service/routes/auth';

const BASE_PATH = '/api/gateway/v1';

export const appRoutes = (app: Application) => {
  app.use('', healthRoutes.routes());
  app.use(BASE_PATH, routes());
};