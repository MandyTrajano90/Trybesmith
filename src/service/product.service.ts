import ProductModel, { ProductInputtableTypes } from '../database/models/product.model';
import { Product } from '../types/Product';

const createProduct = async (product: ProductInputtableTypes): Promise<Product> => {
  const { name, price, userId } = product;
  const { dataValues } = await ProductModel.create({ name, price, userId });
  return dataValues;  
};

const getProducts = async (): Promise<Product[]> => {
  const products = await ProductModel.findAll();
  return products.map((product) => product.dataValues);
};

export default {
  createProduct,
  getProducts,
};