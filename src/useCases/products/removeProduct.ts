import { prismaClient } from '@libs/prismaClient';
import { productIdSchema } from '@schemas/productIdSchema';
import { Request, Response } from 'express';

export const removeProduct = async (req: Request, res: Response) => {
  const params = productIdSchema.parse(req.params);
  const { productId } = params;

  const convertedId = parseInt(productId);

  try {
    await prismaClient.product.delete({
      where: {
        id: convertedId,
      },
    });

    res.status(204).send();
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
      res.status(404).json({ error: 'Product not found' });
    } else {
      res
        .status(500)
        .json({ error: 'An error occurred while deleting the product' });
    }
  }
};
