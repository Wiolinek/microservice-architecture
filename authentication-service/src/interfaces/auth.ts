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

export interface AuthDocument {
  id?: number;
  profilePublicId?: string;
  email: string;
  name: string;
  phone: string;
  password: string;
  isDriver: boolean;
  isPassenger: boolean;
  carMake?: string;
  carImage?: string;
  otp?: string;
  otpExpiration?: Date;
  createdAt?: Date;
  updatedAt?: Date;
  comparePassword(password: string, hashedPassword: string): Promise<boolean>;
  hashPassword(password: string): Promise<string>;
}