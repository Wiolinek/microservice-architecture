import { z } from 'zod';

export const bookRideFormSchema = z.object({
  userId: z.string(),
  rideId: z.string(),
  message: z.string(),
});

export type BookRideFormSchema = z.infer<typeof bookRideFormSchema>;
