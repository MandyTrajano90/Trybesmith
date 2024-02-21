import { Request, Response } from 'express';
import productService from '../service/product.service';
import httpMapper from '../utils/httpMapper';

const createNewProduct = async (req: Request, res: Response): Promise<unknown> => { 
  const { name, price, userId } = req.body;
  const product = await productService.createProduct({ name, price, userId });
  return res.status(httpMapper.CREATED).json(product);
};

const getAllProducts = async (_req: Request, res: Response): Promise<unknown> => {
  const products = await productService.getProducts();
  return res.status(httpMapper.SUCCESSFUL).json(products);
};

export default {
  createNewProduct,
  getAllProducts,
};