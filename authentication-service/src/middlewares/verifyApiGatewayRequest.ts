import JWT from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

const tokens: string[] = ['auth', 'ride', 'booking']; //zmienić na enumy

export function verifyApiGatewayRequest(req: Request, _res: Response, next: NextFunction): void {
  if (!req.headers?.apiGatewayToken) {
    throw new Error('verifyApiGatewayRequest() method: Request is not coming from api gateway');
  }
  const token: string = req.headers?.apiGatewayToken as string;
  if (!token) {
    throw new Error('verifyApiGatewayRequest() method: Request is not coming from api gateway');
  }

  try {
    const payload: { id: string; iat: number } = JWT.verify(token, '1282722b942e08c8a6cb033aa6ce850e') as { id: string; iat: number };
    if (!tokens.includes(payload.id)) {
      throw new Error('verifyApiGatewayRequest() method: Request payload is invalid');
    }
  } catch (error) {
    throw new Error('verifyApiGatewayRequest() method: Request is not coming from api gateway');
  }
  next();
}