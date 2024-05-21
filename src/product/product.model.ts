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

// Define the TProduct schema
const TProductSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    tags: [{ type: String }],
    variants: [TVariantSchema],
    inventory: TInventorySchema
});

// Create and export the model
const Product = model('Product', TProductSchema);

export default Product;
