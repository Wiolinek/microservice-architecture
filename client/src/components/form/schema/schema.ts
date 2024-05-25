import { z } from 'zod';

import { EMAIL_REGEX, PHONE_NUMBER_REGEX, MAX_FILE_SIZE, ACCEPTED_IMAGE_TYPES } from '@data/constants';

export const loginFormSchema = z.object({
  email: z
    .string()
    .min(5, { message: 'Email address should have at least 5 characters' })
    .refine((email) => EMAIL_REGEX.test(email), { message: 'Email address is not valid' }),
  password: z.string().min(8, { message: 'Password should have at least 8 characters' }),
});

export type LoginFormSchema = z.infer<typeof loginFormSchema>;

export const registerFormSchema = z.object({
  email: z
    .string()
    .min(5, { message: 'Email address should have at least 5 characters' })
    .refine((email) => EMAIL_REGEX.test(email), { message: 'Email address is not valid' }),
  name: z.string().min(2, { message: 'Name should have at least 2 characters' }),
  phone: z
    .string()
    .min(9, { message: 'Phone number should have at least 9 characters' })
    .refine((phone) => PHONE_NUMBER_REGEX.test(phone), { message: 'Phone number is not valid' }),
  password: z.string().min(8, { message: 'Password should have at least 8 characters' }),
  repeatPassword: z.string().min(8, { message: 'Password should have at least 8 characters' }),
  isDriver: z.boolean(),
  isPassenger: z.boolean(),
  carMake: z.string().min(2, { message: 'Car make should have at least 2 characters' }),
  carImage: z
    .any()
    .refine((file) => file?.size <= MAX_FILE_SIZE, 'Max image size is 5MB.')
    .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file?.type), 'Only .jpg, .jpeg, .png and .webp formats are supported.'),
});

export type RegisterFormSchema = z.infer<typeof registerFormSchema>;

export const addRideFormSchema = z.object({
  email: z
    .string()
    .min(5, { message: 'Email address should have at least 5 characters' })
    .refine((email) => EMAIL_REGEX.test(email), { message: 'Email address is not valid' }),
  name: z.string().min(2, { message: 'Name should have at least 2 characters' }),
  phone: z
    .string()
    .min(9, { message: 'Phone number should have at least 9 characters' })
    .refine((phone) => PHONE_NUMBER_REGEX.test(phone), { message: 'Phone number is not valid' }),
  carMake: z.string().min(2, { message: 'Car make should have at least 2 characters' }),
  carImage: z
    .any()
    .refine((file) => file?.size <= MAX_FILE_SIZE, 'Max image size is 5MB.')
    .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file?.type), 'Only .jpg, .jpeg, .png and .webp formats are supported.'),
  start: z.string().min(2, { message: 'Start should have at least 2 characters' }),
  startDate: z.string().date(),
  startTime: z.string().time(),
  destination: z.string().min(2, { message: 'Destination should have at least 2 characters' }),
  endDate: z.string().date(),
  endTime: z.string().time(),
  freeSeats: z.number().positive().int().min(1, { message: 'End time should have at least 2 characters' }),
  price: z.number().positive().min(1, { message: 'End time should have at least 2 characters' }),
});

export type AddRideFormSchema = z.infer<typeof addRideFormSchema>;
