import { z } from 'zod';

// Define the Zod schema for the order
const TOrderValidationSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  productId: z.string().length(24, { message: "Product ID must be exactly 24 characters long" }), // Ensure the length is 24 characters
  price: z.number().positive({ message: "Price must be a positive number" }),
  quantity: z.number().int().positive({ message: "Quantity must be a positive integer" })
});

export { TOrderValidationSchema };

