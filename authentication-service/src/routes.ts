import { Application } from 'express';
import { verifyApiGatewayRequest } from '@authentication-service/middlewares/verifyApiGatewayRequest';
import { authRoutes } from '@authentication-service/routes/auth';
import { healthRoutes } from '@routes/health';

const BASE_PATH = '/api/v1/auth';

export function appRoutes(app: Application): void {
  app.use('', healthRoutes());

  app.use(BASE_PATH, verifyApiGatewayRequest, authRoutes());
}
