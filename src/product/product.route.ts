import  express from 'express';
import { productControllers } from './product.controllar';
const router =express.Router();

router.get('/products',productControllers.getsearchProductsFromDB)

router.post('/products',productControllers.createProduct)


 router.get('/products',productControllers.getAllProduct)

router.get('/products/:productId',productControllers.getSingleProduct);

router.put('/products/:productId',productControllers.updateProduct);

router.delete('/products/:productId',productControllers.deleteProduct);



export const productRoutes = router;