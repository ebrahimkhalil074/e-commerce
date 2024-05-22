"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// Define the TVariant schema
const TVariantSchema = new mongoose_1.Schema({
    type: { type: String, required: true },
    value: { type: String, required: true }
});
// Define the TInventory schema
const TInventorySchema = new mongoose_1.Schema({
    quantity: { type: Number, required: true },
    inStock: { type: Boolean, required: true }
});
// Define the TProduct schema
// const TProductSchema = new Schema({
//     name: { type: String, required: true },
//     description: { type: String, required: true },
//     price: { type: Number, required: true },
//     category: { type: String, required: true },
//     tags: [{ type: String }],
//     variants: [TVariantSchema],
//     inventory: TInventorySchema
// });
const TProductSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: [String], required: true },
    tags: { type: [String], required: false },
    variants: { type: [TVariantSchema], required: true },
    inventory: { type: TInventorySchema, required: true },
});
// Create and export the model
const Product = (0, mongoose_1.model)('Product', TProductSchema);
exports.default = Product;
