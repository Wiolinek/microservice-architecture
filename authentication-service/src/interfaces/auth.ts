declare global {
  namespace Express {
    interface Request {
      currentUser?: AuthPayload;
    }
  }
}

export interface AuthPayload {
  id: number;
  username: string;
  email: string;
}

export interface ErrorResponse {
  message: string;
  statusCode: number;
  status: string;
  comingFrom: string;
  serializeErrors(): Error;
}

export interface Error {
  message: string;
  statusCode: number;
  status: string;
  comingFrom: string;
}
