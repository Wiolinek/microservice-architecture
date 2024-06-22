import { z } from 'zod';
import { EMAIL_REGEX, PHONE_NUMBER_REGEX, MAX_FILE_SIZE, ACCEPTED_IMAGE_TYPES } from '@data/constants';

export const addRideFormSchema = z
  .object({
    email: z
      .string()
      .min(5, { message: 'Email address must have at least 5 characters' })
      .refine((email) => EMAIL_REGEX.test(email), { message: 'Email address is not valid' }),
    name: z.string().min(2, { message: 'Name must have at least 2 characters' }),
    phone: z
      .string()
      .min(9, { message: 'Phone number must have at least 9 characters' })
      .refine((phone) => PHONE_NUMBER_REGEX.test(phone), { message: 'Phone number is not valid' }),
    carMake: z.string().min(2, { message: 'Car make must have at least 2 characters' }),
    carImage: z
      .any()
      .refine((files) => files?.length == 1, 'Image is required.')
      .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, 'Max file size is 5MB.')
      .refine((files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type), '.jpg, .jpeg, .png and .webp files are accepted.'),
    start: z.string().min(2, { message: 'Start must have at least 2 characters' }),
    destination: z.string().min(2, { message: 'Destination must have at least 2 characters' }),
    totalSeats: z.coerce
      .number()
      .int()
      .min(1, { message: 'Number of total seats is required' })
      .gt(0, { message: 'Number of total seats must be greaten than 0' }),
    freeSeats: z.coerce
      .number()
      .int()
      .min(1, { message: 'Number of available seats is required' })
      .gt(0, { message: 'Number of available seats must be greaten than 0' }),
    price: z.coerce.number().int().min(1, { message: 'Price is required' }).gt(0, { message: 'Price must be greaten than 0' }),
    startDate: z.coerce.date().refine((data) => data > new Date(), { message: 'Start date must be in the future' }),
    endDate: z.coerce.date(),
  })
  .superRefine(({ startDate, endDate }, ctx) => {
    if (startDate > endDate) {
      ctx.addIssue({
        code: 'custom',
        message: 'End date cannot be earlier than start date.',
        path: ['endDate'],
      });
    }
  })
  .superRefine(({ totalSeats, freeSeats }, ctx) => {
    if (totalSeats >= freeSeats) {
      ctx.addIssue({
        code: 'custom',
        message: 'Number of total seats has to be greater or equal the number of free seats',
        path: ['freeSeats'],
      });
    }
  });

export type AddRideFormSchema = z.infer<typeof addRideFormSchema>;
