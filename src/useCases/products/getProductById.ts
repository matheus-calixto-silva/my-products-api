import { prismaClient } from '@libs/prismaClient';
import { productIdSchema } from '@schemas/productIdSchema';
import { Request, Response } from 'express';

export const getProductById = async (req: Request, res: Response) => {
  const params = productIdSchema.parse(req.params);
  const { productId } = params;

  const convertedId = parseInt(productId);

  try {
    const product = await prismaClient.product.findFirst({
      where: {
        id: convertedId,
      },
    });

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json(product);
  } catch (error) {
    console.error('Error fetching product by ID:', error);
    res
      .status(500)
      .json({ error: 'An error occurred while fetching the product' });
  }
};
