import express from 'express';
import { orderControllares } from './order.controllares';
const router =express.Router();
router.get('/orders',orderControllares.SearchOrderIntoDB)
router.post('/orders',orderControllares.createOrder)
// router.get('/orders',orderControllares.getAllOrders)



export const orderRoutes =router
