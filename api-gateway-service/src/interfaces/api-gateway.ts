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

export interface Login {
  email: string;
  password: string;
}

export interface Register {
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