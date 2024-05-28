import { z } from 'zod';

import { EMAIL_REGEX } from '@data/constants';

export const loginFormSchema = z.object({
  email: z
    .string()
    .min(5, { message: 'Email address must have at least 5 characters' })
    .refine((email) => EMAIL_REGEX.test(email), { message: 'Email address is not valid' }),
  password: z.string().min(8, { message: 'Password must have at least 8 characters' }),
});

export type LoginFormSchema = z.infer<typeof loginFormSchema>;
