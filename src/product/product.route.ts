import  express from 'express';
import { productControllers } from './product.controllar';
const router =express.Router();

router.post('/products',productControllers.createProduct)


router.get('/products',productControllers.getAllProduct)

router.get('/products/:productId',productControllers.getSingleProduct);

router.put('/products/:productId',productControllers.updateProduct);

router.delete('/products/:productId',productControllers.deleteProduct);

router.get('/product',productControllers.getsearchProductsFromDB)

export const productRoutes = router;