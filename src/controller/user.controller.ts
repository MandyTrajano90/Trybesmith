import { Request, Response } from 'express';
import httpMapper from '../utils/httpMapper';
import userService from '../service/user.service';

const getAllUsers = async (req: Request, res: Response): Promise<unknown> => {
  const users = await userService.getUsers();
  return res.status(httpMapper.SUCCESSFUL).json(users);
};

export default { 
  getAllUsers,
};
