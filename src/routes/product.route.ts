import { Router } from 'express';
import productController from '../controller/product.controller';
import nameValidation from '../middlewares/nameValidation';
import priceValidation from '../middlewares/priceValidation';
import userIdValidation from '../middlewares/userIdValidation';

const productRouter = Router();

productRouter.post(
  '/',
  userIdValidation,
  nameValidation,
  priceValidation,
  productController.createNewProduct,
);
productRouter.get('/', productController.getAllProducts);

export default productRouter;