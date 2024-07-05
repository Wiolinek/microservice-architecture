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

export interface RegisterData {
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
  createdAt?: Date;
  updatedAt?: Date;
  comparePassword(password: string, hashedPassword: string): Promise<boolean>;
  hashPassword(password: string): Promise<string>;
}


export interface UserData {
  id?: number;
  profilePublicId?: string;
  email: string;
  name: string;
  phone: string;
  password?: string;
  isDriver: boolean;
  isPassenger: boolean;
  carMake?: string;
  carImage?: string;
}

export interface AuthUserMessageDetails {
  name?: string;
  email?: string;
  createdAt?: Date;
  type?: string;
}