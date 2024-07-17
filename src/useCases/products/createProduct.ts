import { prismaClient } from '@libs/prismaClient';
import { createProductSchema } from '@schemas/createProductSchema';
import { Request, Response } from 'express';
import { ZodError } from 'zod';

export const createProduct = async (req: Request, res: Response) => {
  try {
    const validatedData = createProductSchema.parse(req.body);
    const { name, price, description } = validatedData;
    const priceNumber = parseFloat(price);

    const createdProduct = await prismaClient.product.create({
      data: {
        name,
        description,
        price: priceNumber,
      },
    });

    res.json(createdProduct);
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json({ error: error.issues });
    }
    console.error(error);
    res.status(500).json({
      error: 'An error occurred while creating the product',
    });
  }
};
