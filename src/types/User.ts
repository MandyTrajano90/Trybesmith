import { Product } from './Product';

export type User = {
  id: number;
  username: string;
  vocation: string;
  level: number;
  password: string;
  productIds?: Product[];
};

export type UsersWithProductsIds = {
  username: string;
  productIds: number[] | undefined;
};