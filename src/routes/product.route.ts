import { Router } from 'express';
import productController from '../controller/product.controller';

const productRouter = Router();

productRouter.post('/', productController.createNewProduct);
productRouter.get('/', productController.getAllProducts);

export default productRouter;