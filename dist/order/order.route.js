"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRoutes = void 0;
const express_1 = __importDefault(require("express"));
const order_controllares_1 = require("./order.controllares");
const router = express_1.default.Router();
router.get('/orders', order_controllares_1.orderControllares.SearchOrderIntoDB);
router.post('/orders', order_controllares_1.orderControllares.createOrder);
// router.get('/orders',orderControllares.getAllOrders)
exports.orderRoutes = router;
