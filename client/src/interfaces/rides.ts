import { z } from 'zod';
import { LoginFormValues, RegisterFormValues } from '@interfaces/auth';

export interface AddRideFormValues {
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
}

export interface FormProps {
  formType: React.ReactNode;
  formSchema: z.ZodSchema;
  defaultValues?: LoginFormValues | RegisterFormValues | AddRideFormValues;
}

export interface AddRidePayload {
  email: string;
  name: string;
  phone: string;
  start: string;
  startDate: Date;
  destination: string;
  endDate: Date;
  totalSeats: number;
  freeSeats: number;
  price: number;
  carMake: string;
  carImage?: string;
}

export interface BookRidePayload {
  rideId: string;
  userId: string;
}

export interface ReduxLogout {
  type: string;
  payload: boolean;
}

export interface ReduxAddAuthUser {
  type: string;
  payload: ReduxAuthPayload;
}

export interface ReduxAuthPayload {
  authInfo?: RegisterData;
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
}
