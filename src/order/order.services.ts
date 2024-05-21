
import { TOrder } from "./order.interface";
import Order from "./order.model";

const createOrderIntoDB = async (orderData:TOrder ) => {
 
    const result = await Order.create(orderData);

    return result;
  };

// const getOllOrdersIntoDB = async ()=>{
//     const result = await Order.find();
//     return result;
// }

const getSearchOrderIntoDB =async (email :string)=>{
    const query = {email};
    const result = await Order.find(query);
    return result;
    }





  export const orderServices ={
createOrderIntoDB,
  // getOllOrdersIntoDB,
  getSearchOrderIntoDB
  }