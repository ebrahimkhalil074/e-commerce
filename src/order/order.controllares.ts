import { Request, Response } from "express";
import { orderServices } from "./order.services";
import { TOrderValidationSchema } from "./order.validation";
import Product from "../product/product.model";
import { TProduct } from "../product/product.interface";


const  createOrder =async (req:Request,res:Response)=>{
try {

    
    console.log(req.body);
    
    const orderData =req.body
     console.log(orderData,);
   



 const validatedOrderData =TOrderValidationSchema.parse(orderData);
//  
console.log(validatedOrderData.productId);

const product = await Product.findById(validatedOrderData.productId);
const y = product;
    console.log('pro',y);

        // Check if product exists
        if (!y) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }

        // Check available quantity in inventory
        if (y.inventory?.quantity as number < validatedOrderData.quantity) {
            return res.status(400).json({ success: false, message: "Insufficient quantity available in inventory" });
        }

        // Deduct ordered quantity from inventory
    
         y.inventory?.quantity   -= validatedOrderData.quantity;

        // Update inStock status based on remaining quantity
        y.inventory?.inStock = y.inventory?.quantity as number > 0;

        // Save updated product in database
        await y.save();
  


// 
const result =await orderServices.createOrderIntoDB(validatedOrderData)
res.status(200).json({
    success: true,
    message: "Order created successfully!",
    data: result,y,
  });
return result
} catch (error) {
    console.log(error);
    
    res.status(500).json({
        success:false,
        message: 'somthing went worng',
        error: error,
      });
}
}

// const getAllOrders =async(req:Request,res:Response)=>{

//     try {
       
//         const result = await orderServices.getOllOrdersIntoDB()
//         res.status(200).json({
//             success: true,
//             message: " Orders fetched successfully!",
//             data: result,
//           });
//     } catch (error) {
//         res.status(500).json({
//             success:false,
//             message: 'somthing went worng',
//             error: error,
//           }); 
//     }

// }
const SearchOrderIntoDB =async( req:Request,res:Response)=>{
    try {
        console.log( req.query);
        
        const email= req.query.email
        console.log(email);
        const result = await orderServices.getSearchOrderIntoDB(email as string)
        
        if(result.length === 0){
            res.status(200).json({ 
                success: false,
                message: `Order not found`,
                data: result,
              });
            return;
        }
        res.status(200).json({ 
            success: true,
            message: `order matching search term ${email} fetched successfully!`,
            data: result,
          });
    } catch (error) {
        res.status(500).json({
            success:false,
            message: 'Order not found',
            error: error,
          });
    }
    }

export const orderControllares ={
    createOrder,
    // getAllOrders,
    SearchOrderIntoDB
}