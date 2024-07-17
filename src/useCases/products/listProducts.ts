import { Request, Response } from 'express';

import { prismaClient } from '@libs/prismaClient';

export const listProducts = async (req: Request, res: Response) => {
  try {
    const products = await prismaClient.product.findMany();

    res.json(products);
  } catch (error) {
    console.error('Error listing products:', error);
    res
      .status(500)
      .json({ error: 'An error occurred while listing the products' });
  }
};
