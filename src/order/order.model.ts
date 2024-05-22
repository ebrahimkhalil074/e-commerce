import { Schema, model } from 'mongoose';



const OrderSchema = new Schema({
  email: { type: String, required: true ,unique:true},
  productId:{ type: String, required: true 
  } ,
  price: { type: Number, required: true },
  quantity: { type: Number, required: true }
});


export const Order = model('Order', OrderSchema);

export default Order;
