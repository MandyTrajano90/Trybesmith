import bcrypt from 'bcryptjs';
import jwt from '../utils/jwt';
import { ServiceRes } from '../types/ServiceRes';
import { Token } from '../types/Token';
import { LoginType } from '../types/Login';
import UserModel from '../database/models/user.model';

const verifyLogin = async (login: LoginType): Promise<ServiceRes<Token>> => {
  if (!login.username || !login.password) {
    return {
      status: 'BAD_REQUEST', data: { message: '"username" and "password" are required' } };
  }
  const specificUser = await UserModel.findOne({ where: { username: login.username } });
  if (!specificUser || !bcrypt.compareSync(login.password, specificUser.dataValues.password)) {
    return { status: 'UNAUTHORIZED', data: { message: 'Username or password invalid' } };
  }
  const { id, username } = specificUser.dataValues;
  const token = jwt.signToken({ id, username });
  return {
    status: 'SUCCESSFUL',
    data: { token } };
};

export default {
  verifyLogin,
};