import { LoginFormValues, RegisterFormValues } from '@features/authentication/interfaces/interfaces';
import { z } from 'zod';

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
