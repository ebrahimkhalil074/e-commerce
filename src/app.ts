/* eslint-disable @typescript-eslint/no-unused-vars */
import express, { Application } from'express'
import cors from 'cors'
import { productRoutes } from './product/product.route';
import { orderRoutes } from './order/order.route';
import  { Request, Response, NextFunction } from 'express';
const app :Application = express()

// parser
app.use(express.json())
app.use(cors());
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
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
  
  res.status(500).json({
    success: false,
    message: 'Something went wrong',
    
  });
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})



export default app