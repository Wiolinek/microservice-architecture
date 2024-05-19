import { z } from 'zod';

export interface FormProps {
  formType: React.ReactNode;
  formSchema: z.ZodSchema;
  defaultValues?: LoginFormValues | RegisterFormValues;
}

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
  driver: boolean;
  passenger: boolean;
  carMake?: string;
  carImage?: string;
}
