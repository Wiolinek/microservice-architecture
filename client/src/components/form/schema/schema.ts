import { z } from 'zod';

import { emailRegex, phoneNumberRegex } from '@data/constants';

export const loginFormSchema = z.object({
  email: z
    .string()
    .min(5, { message: 'Email address should have at least 5 characters' })
    .refine((email) => emailRegex.test(email), { message: 'Email address is not valid' }),
  password: z.string().min(8, { message: 'Password should have at least 8 characters' }),
});

export type LoginFormSchema = z.infer<typeof loginFormSchema>;

export const registerFormSchema = z.object({
  email: z
    .string()
    .min(5, { message: 'Email address should have at least 5 characters' })
    .refine((email) => emailRegex.test(email), { message: 'Email address is not valid' }),
  name: z.string().min(2, { message: 'Name should have at least 2 characters' }),
  phone: z
    .string()
    .min(9, { message: 'Phone number should have at least 9 characters' })
    .refine((phone) => phoneNumberRegex.test(phone), { message: 'Phone number is not valid' }),
  password: z.string().min(8, { message: 'Password should have at least 8 characters' }),
  repeatPassword: z.string().min(8, { message: 'Password should have at least 8 characters' }),
  driver: z.boolean(),
  passenger: z.boolean(),
  carMake: z.string().min(2, { message: 'Car make should have at least 2 characters' }),
  carImage: z.string(),
});

export type RegisterFormSchema = z.infer<typeof registerFormSchema>;
