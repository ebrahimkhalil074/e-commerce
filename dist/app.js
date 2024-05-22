"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-unused-vars */
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const product_route_1 = require("./product/product.route");
const order_route_1 = require("./order/order.route");
const app = (0, express_1.default)();
// parser
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/api', product_route_1.productRoutes);
app.use('/api', order_route_1.orderRoutes);
// Middleware for handling undefined routes
app.use((req, res, next) => {
    res.status(404).json({
        success: false,
        message: "Route not found"
    });
});
// Error-handling middleware
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err, req, res, next) => {
    res.status(500).json({
        success: false,
        message: 'Something went wrong',
    });
});
app.get('/', (req, res) => {
    res.send('Hello World!');
});
exports.default = app;
