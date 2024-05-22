"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TProductValidationSchema = exports.TInventoryValidationSchema = exports.TVariantValidationSchema = void 0;
const zod_1 = require("zod");
// Define the TVariant schema with error messages
const TVariantValidationSchema = zod_1.z.object({
    type: zod_1.z.string().max(50, { message: 'Type must be at most 50 characters long' }),
    value: zod_1.z.string().max(100, { message: 'Value must be at most 100 characters long' })
});
exports.TVariantValidationSchema = TVariantValidationSchema;
// Define the TInventory schema with error messages
const TInventoryValidationSchema = zod_1.z.object({
    quantity: zod_1.z.number().int().positive({ message: 'Quantity must be a positive integer' }),
    inStock: zod_1.z.boolean()
});
exports.TInventoryValidationSchema = TInventoryValidationSchema;
// Define the TProduct schema with error messages
const TProductValidationSchema = zod_1.z.object({
    name: zod_1.z.string().max(100, { message: 'Name must be at most 100 characters long' }),
    description: zod_1.z.string().max(500, { message: 'Description must be at most 500 characters long' }),
    price: zod_1.z.number().positive({ message: 'Price must be a positive number' }),
    category: zod_1.z.string().max(50, { message: 'Category must be at most 50 characters long' }),
    tags: zod_1.z.array(zod_1.z.string()).optional(),
    variants: zod_1.z.array(TVariantValidationSchema),
    inventory: TInventoryValidationSchema
});
exports.TProductValidationSchema = TProductValidationSchema;
