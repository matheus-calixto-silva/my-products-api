import { z } from 'zod';

export const productIdSchema = z.object({
  productId: z
    .string()
    .regex(/^\d+$/, { message: 'Invalid product ID format' }),
});
