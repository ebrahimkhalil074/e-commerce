"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TOrderValidationSchema = void 0;
const zod_1 = require("zod");
// Define the Zod schema for the order
const TOrderValidationSchema = zod_1.z.object({
    email: zod_1.z.string().email({ message: 'Email must be a valid email address' }).min(1, { message: 'Email is required' }),
    productId: zod_1.z.string().max(50, { message: "Product ID must be exactly 50 carr" }), // Ensure the length is 24 characters
    price: zod_1.z.number().positive({ message: "Price must be a positive number" }),
    quantity: zod_1.z.number().int().positive({ message: "Quantity must be a positive integer" })
});
exports.TOrderValidationSchema = TOrderValidationSchema;
