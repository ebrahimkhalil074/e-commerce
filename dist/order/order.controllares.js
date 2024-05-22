"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderControllares = void 0;
const order_services_1 = require("./order.services");
const order_validation_1 = require("./order.validation");
const product_model_1 = __importDefault(require("../product/product.model"));
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    try {
        console.log(req.body);
        const orderData = req.body;
        console.log(orderData);
        const validatedOrderData = order_validation_1.TOrderValidationSchema.parse(orderData);
        //  
        console.log(validatedOrderData.productId);
        const product = yield product_model_1.default.findById(validatedOrderData.productId);
        const y = product;
        console.log('pro', y);
        // Check if product exists
        if (!y) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }
        if (!y.inventory) {
            return res.status(400).json({ success: false, message: "Inventory data not available" });
        }
        // Check available quantity in inventory
        if (((_a = y.inventory) === null || _a === void 0 ? void 0 : _a.quantity) < validatedOrderData.quantity) {
            return res.status(400).json({ success: false, message: "Insufficient quantity available in inventory" });
        }
        // Deduct ordered quantity from inventory
        y.inventory.quantity -= validatedOrderData.quantity;
        // Update inStock status based on remaining quantity
        y.inventory.inStock = ((_b = y.inventory) === null || _b === void 0 ? void 0 : _b.quantity) > 0;
        // Save updated product in database
        yield y.save();
        // 
        const result = yield order_services_1.orderServices.createOrderIntoDB(validatedOrderData);
        res.status(200).json({
            success: true,
            message: "Order created successfully!",
            data: result, y,
        });
        return result;
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'somthing went worng',
            error: error,
        });
    }
});
// const getAllOrders =async(req:Request,res:Response)=>{
//     try {
//         const result = await orderServices.getOllOrdersIntoDB()
//         res.status(200).json({
//             success: true,
//             message: " Orders fetched successfully!",
//             data: result,
//           });
//     } catch (error) {
//         res.status(500).json({
//             success:false,
//             message: 'somthing went worng',
//             error: error,
//           }); 
//     }
// }
const SearchOrderIntoDB = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.query);
        const email = req.query.email;
        console.log(email);
        const result = yield order_services_1.orderServices.getSearchOrderIntoDB(email);
        if (result.length === 0) {
            res.status(200).json({
                success: false,
                message: `Order not found`,
                data: result,
            });
            return;
        }
        res.status(200).json({
            success: true,
            message: `order matching search term ${email} fetched successfully!`,
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Order not found',
            error: error,
        });
    }
});
exports.orderControllares = {
    createOrder,
    // getAllOrders,
    SearchOrderIntoDB
};
