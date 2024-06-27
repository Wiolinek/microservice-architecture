import { Application } from 'express';
import { verifyApiGatewayRequest } from '@rides-service/middlewares/verifyApiGatewayRequest';
import { ridesRoutes } from '@rides-service/routes/rides';
import { healthRoute } from '@routes/health';

const BASE_PATH = '/api/v1/rides';

export function appRoutes(app: Application): void {
  app.use('', healthRoute());

  app.use(BASE_PATH, verifyApiGatewayRequest, ridesRoutes());
}
