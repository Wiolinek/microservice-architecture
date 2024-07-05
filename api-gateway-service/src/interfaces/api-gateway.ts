export interface LoginData {
  email: string;
  password: string;
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

export interface AddRide {
  email: string;
  name: string;
  phone: string;
  start: string;
  startDate: Date;
  destination: string;
  endDate: Date;
  totalSeats: string;
  freeSeats: string;
  price: string;
  carMake: string;
  carImage: string;
  createdAt?: Date;
}