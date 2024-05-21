import express from'express'
import { productRoutes } from './product/product.route';
const app = express()

// parser
app.use(express.json())

app.use('/api', productRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!')
})



export default app