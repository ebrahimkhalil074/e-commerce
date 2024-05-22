"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRoutes = void 0;
const express_1 = __importDefault(require("express"));
const product_controllar_1 = require("./product.controllar");
const router = express_1.default.Router();
router.get('/products', product_controllar_1.productControllers.getsearchProductsFromDB);
router.post('/products', product_controllar_1.productControllers.createProduct);
router.get('/products', product_controllar_1.productControllers.getAllProduct);
router.get('/products/:productId', product_controllar_1.productControllers.getSingleProduct);
router.put('/products/:productId', product_controllar_1.productControllers.updateProduct);
router.delete('/products/:productId', product_controllar_1.productControllers.deleteProduct);
exports.productRoutes = router;
