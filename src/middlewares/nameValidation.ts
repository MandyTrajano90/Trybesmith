import { NextFunction, Request, Response } from 'express';
import httpMapper from '../utils/httpMapper';

const nameValidation = (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.body;

  if (!name) {
    return res.status(httpMapper.BAD_REQUEST).json({
      message: '"name" is required',
    });
  }

  if (name.length < 3) {
    return res.status(httpMapper.INVALID_VALUE).json({
      message: '"name" length must be at least 3 characters long',
    });
  }

  if (typeof name !== 'string') {
    return res.status(httpMapper.INVALID_VALUE).json({
      message: '"name" must be a string',
    });
  }

  next();
};

export default nameValidation;
