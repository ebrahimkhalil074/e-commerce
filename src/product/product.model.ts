import { Schema, model } from 'mongoose';


// Define the TVariant schema
const TVariantSchema = new Schema({
    type: { type: String, required: true },
    value: { type: String, required: true }
});

// Define the TInventory schema
const TInventorySchema = new Schema({
    quantity: { type: Number, required: true },
    inStock: { type: Boolean, required: true }
});

// const TProductSchema = new Schema({
//     name: { type: String, required: true },
//     description: { type: String, required: true },
//     price: { type: Number, required: true },
//     category: { type: String, required: true },
//     tags: [{ type: String }],
//     variants: [TVariantSchema],
//     inventory: TInventorySchema
// });
const TProductSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: [String], required: true },
    tags: { type: [String], required: false },
    variants: { type: [TVariantSchema], required: true },
    inventory: { type: TInventorySchema, required: true },
});

// Create and export the model
const Product = model('Product', TProductSchema);

export default Product;
