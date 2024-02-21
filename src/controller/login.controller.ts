import { Request, Response } from 'express';
import httpMapper from '../utils/httpMapper';
import loginService from '../service/login.service';

const newLogin = async (req: Request, res: Response): Promise<unknown> => {
  const { username, password } = req.body;
  const response = await loginService.verifyLogin({ username, password });
  const { status, data } = response;
  if (status !== 'SUCCESSFUL') {
    return res.status(httpMapper[status]).json(data);
  }
  return res.status(httpMapper[status]).json(data);
};

export default {
  newLogin,
};