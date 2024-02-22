import { NextFunction, Request, Response } from 'express';
import httpMapper from '../utils/httpMapper';

const priceValidation = (req: Request, res: Response, next: NextFunction) => {
  const { price } = req.body;
  
  if (!price) {
    return res.status(httpMapper.BAD_REQUEST).json({
      message: '"price" is required',
    });
  }

  if (typeof price !== 'string') {
    return res.status(httpMapper.INVALID_VALUE).json({
      message: '"price" must be a string',
    });
  }

  if (price.length < 3) {
    return res.status(httpMapper.INVALID_VALUE).json({
      message: '"price" length must be at least 3 characters long',
    });
  }

  next();
};

export default priceValidation;
