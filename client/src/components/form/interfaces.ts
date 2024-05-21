import { z } from 'zod';

export interface LoginFormValues {
  email: string;
  password: string;
}

export interface RegisterFormValues {
  email: string;
  name: string;
  phone: string;
  password: string;
  repeatPassword: string;
  isDriver: boolean;
  isPassenger: boolean;
  carMake?: string;
  carImage?: string;
}

export interface AddRideFormValues {
  email: string;
  name: string;
  phone: string;
  start: string;
  startDate: string;
  startTime: string;
  destination: string;
  endDate: string;
  endTime: string;
  totalSeats: number;
  freeSeats: number;
  price: number;
  carMake: string;
  carImage: string;
}

export interface FormProps {
  formType: React.ReactNode;
  formSchema: z.ZodSchema;
  defaultValues?: LoginFormValues | RegisterFormValues | AddRideFormValues;
}
