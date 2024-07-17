import { z } from 'zod';

export const createProductSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: 'O nome deve ter pelo menos 2 caracteres.',
    })
    .regex(/^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/, {
      message: 'O nome não pode conter números.',
    }),
  description: z.string().min(5, {
    message: 'A descrição deve ter pelo menos 5 caracteres.',
  }),
  price: z.string().regex(/^\d+(\.\d{1,2})?$/, {
    message: 'O preço deve ser um número válido com até duas casas decimais.',
  }),
});
