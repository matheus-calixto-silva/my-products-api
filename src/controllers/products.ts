import { createProduct } from '@useCases/products/createProduct';
import { getProductById } from '@useCases/products/getProductById';
import { listProducts } from '@useCases/products/listProducts';
import { removeProduct } from '@useCases/products/removeProduct';
import { updateProduct } from '@useCases/products/updateProduct';

import { Router } from 'express';

export const productsRouter = Router();

productsRouter.get('/products', listProducts);

productsRouter.post('/products', createProduct);

productsRouter.get('/products/:productId', getProductById);

productsRouter.put('/products/:productId', updateProduct);

productsRouter.delete('/products/:productId', removeProduct);
