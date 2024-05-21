import express from'express'
import { productRoutes } from './product/product.route';
import { orderRoutes } from './order/order.route';
import  { Request, Response, NextFunction } from 'express';
const app = express()

// parser
app.use(express.json())

app.use('/api', productRoutes);
app.use('/api', orderRoutes);


// Middleware for handling undefined routes
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    success: false,
    message: "Route not found"
  });
});

// Error-handling middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong',
    error: err.message
  });
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})



export default app