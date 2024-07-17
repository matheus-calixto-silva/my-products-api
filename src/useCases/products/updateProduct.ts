import { Request, Response } from 'express';

import { prismaClient } from '@libs/prismaClient';
import { productIdSchema } from '@schemas/productIdSchema';
import { updateProductSchema } from '@schemas/updateProductSchema';
import { ZodError } from 'zod';

type UpdateProductBody = {
  name?: string;
  description?: string;
  price?: string;
};

export const updateProduct = async (req: Request, res: Response) => {
  const params = productIdSchema.parse(req.params);
  const validatedData = updateProductSchema.parse(req.body);
  const { name, description, price } = validatedData as UpdateProductBody;
  const { productId } = params;

  const convertedId = parseInt(productId);

  const updateData: Partial<{
    name: string;
    description: string;
    price: number;
  }> = {};
  if (name) updateData.name = name;
  if (description) updateData.description = description;
  if (price) {
    const priceNumber = parseFloat(price);
    updateData.price = priceNumber;
  }

  if (Object.keys(updateData).length === 0) {
    return res
      .status(400)
      .json({ error: 'No valid fields provided for update' });
  }

  try {
    const updatedProduct = await prismaClient.product.update({
      data: updateData,
      where: {
        id: convertedId,
      },
    });

    res.json({ updatedProduct });
  } catch (error) {
    console.error('Error updating product:', error);

    if (error instanceof ZodError) {
      return res.status(400).json({ error: error.issues });
    }

    if (isPrismaClientKnownRequestError(error) && error.code === 'P2025') {
      return res.status(404).json({ error: 'Product not found' });
    }
    res
      .status(500)
      .json({ error: 'An error occurred while updating the product' });
  }
};

// Type guard to check if the error is a PrismaClientKnownRequestError
function isPrismaClientKnownRequestError(
  error: unknown,
): error is PrismaClientKnownRequestError {
  return typeof error === 'object' && error !== null && 'code' in error;
}

// Interface for PrismaClientKnownRequestError
interface PrismaClientKnownRequestError {
  code: string;
}
