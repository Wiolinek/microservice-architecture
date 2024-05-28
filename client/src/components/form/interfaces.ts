import { LoginFormValues, RegisterFormValues } from '@features/authentication/interfaces/interfaces';
import { z } from 'zod';
import { Dayjs } from 'dayjs';

export interface AddRideFormValues {
  email: string;
  name: string;
  phone: string;
  start: string;
  startDate: Dayjs;
  destination: string;
  endDate: Dayjs;
  totalSeats: number;
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
