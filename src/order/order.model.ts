import { Schema, model } from 'mongoose';


const OrderSchema = new Schema({
  email: { type: String, required: true },
  productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true }
});


export const Order = model('Order', OrderSchema);

export default Order;
