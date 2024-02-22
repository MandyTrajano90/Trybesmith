import { NextFunction, Request, Response } from 'express';
import httpMapper from '../utils/httpMapper';
import UserModel from '../database/models/user.model';

const userIdValidation = async (req: Request, res: Response, next: NextFunction) => {
  const { userId } = req.body;

  if (!userId) {
    return res.status(httpMapper.BAD_REQUEST).json({
      message: '"userId" is required',
    });
  }
  const user = await UserModel.findByPk(userId);

  if (!user) {
    return res.status(httpMapper.INVALID_VALUE).json({
      message: '"userId" not found',
    });
  }

  if (typeof userId !== 'number') {
    return res.status(httpMapper.INVALID_VALUE).json({
      message: '"userId" must be a number',
    });
  }
  next();
};

export default userIdValidation;
