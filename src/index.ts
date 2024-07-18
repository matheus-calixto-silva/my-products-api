import { env } from '@config/env';
import { productsRouter } from '@controllers/products';
import { errorHandler } from '@middlewares/errorHandlerMiddleware';
import cors from 'cors';
import express from 'express';

const app = express();

app.use(cors());
app.use(express.json());

app.use(productsRouter);

app.listen(env.port, async () => {
  try {
    console.log(`🚀 Server is running on http://localhost:${env.port}`);
    console.log('Connected to MySQL');
  } catch (err) {
    if (err instanceof Error) {
      console.error('Error connecting to MySQL', err.message);
    }
  }
});

app.use(errorHandler);
