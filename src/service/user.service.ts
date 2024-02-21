import ProductModel from '../database/models/product.model';
import UserModel from '../database/models/user.model';
import { UsersWithProductsIds } from '../types/User';

const getUsers = async (): Promise<UsersWithProductsIds[]> => {
  const users = await UserModel.findAll({
    include: [{ model: ProductModel, as: 'productIds', attributes: ['id'] }],
  });

  const allUsers = users.map((user) => ({
    username: user.dataValues.username,
    productIds: user.dataValues.productIds?.map((product) => product.id),
  }));

  return allUsers;
};

export default {
  getUsers,
};