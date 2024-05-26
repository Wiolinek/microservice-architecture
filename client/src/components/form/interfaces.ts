import { LoginFormValues, RegisterFormValues } from '@features/authentication/interfaces/interfaces';
import { z } from 'zod';

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
