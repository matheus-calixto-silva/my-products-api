import { NextFunction, Request, Response } from 'express';

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.error('Unexpected error', err);
  res.status(500).json({ error: 'An unexpected error occurred' });

  next(err);
};
