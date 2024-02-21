import { Router } from 'express';
import productController from '../controller/product.controller';

const productRouter = Router();

productRouter.post('/', productController.createNewProduct);

export default productRouter;