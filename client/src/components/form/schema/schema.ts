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

export const requiredRegisterFormSchema = z
  .object({
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
  })
  .superRefine(({ repeatPassword, password }, ctx) => {
    if (repeatPassword !== password) {
      ctx.addIssue({
        code: 'custom',
        message: 'Passwords do not match',
        path: ['repeatPassword'],
      });
    }
  });

export const optionalRegisterFormSchema = z.discriminatedUnion('isDriver', [
  z.object({
    isDriver: z.literal(true),
    carMake: z.string().min(2, { message: 'Car make should have at least 2 characters' }),
    carImage: z
      .any()
      .refine((files) => files?.length == 1, 'Image is required.')
      .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, 'Max file size is 5MB.')
      .refine((files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type), '.jpg, .jpeg, .png and .webp files are accepted.'),
    isPassenger: z.boolean(),
  }),
  z.object({
    isDriver: z.literal(false),
    carMake: z.any(),
    carImage: z.any(),
    isPassenger: z.literal(true, {
      errorMap: () => ({ message: 'At least one option needs to be checked' }),
    }),
  }),
]);

export const registerFormSchema = z.intersection(requiredRegisterFormSchema, optionalRegisterFormSchema);

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
