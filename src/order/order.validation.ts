import { z } from 'zod';

// Define the Zod schema for the order
const TOrderValidationSchema = z.object({
  email: z.string().email({ message: 'Email must be a valid email address' }).min(1, { message: 'Email is required' }),
  productId: z.string().max(50, { message: "Product ID must be exactly 50 carr" }), // Ensure the length is 24 characters
  price: z.number().positive({ message: "Price must be a positive number" }),
  quantity: z.number().int().positive({ message: "Quantity must be a positive integer" })
});

export { TOrderValidationSchema };

