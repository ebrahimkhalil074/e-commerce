import { z } from 'zod';

// Define the TVariant schema with error messages
const TVariantValidationSchema = z.object({
    type: z.string().max(50, { message: 'Type must be at most 50 characters long' }),
    value: z.string().max(100, { message: 'Value must be at most 100 characters long' })
});

// Define the TInventory schema with error messages
const TInventoryValidationSchema = z.object({
    quantity: z.number().int().positive({ message: 'Quantity must be a positive integer' }),
    inStock: z.boolean()
});

// Define the TProduct schema with error messages
const TProductValidationSchema = z.object({
    name: z.string().max(100, { message: 'Name must be at most 100 characters long' }),
    description: z.string().max(500, { message: 'Description must be at most 500 characters long' }),
    price: z.number().positive({ message: 'Price must be a positive number' }),
    category:z.string().max(50, { message: 'Category must be at most 50 characters long' }),
    tags: z.array(z.string()).optional(),
    variants: z.array(TVariantValidationSchema),
    inventory: TInventoryValidationSchema
});

export { TVariantValidationSchema, TInventoryValidationSchema, TProductValidationSchema };
 