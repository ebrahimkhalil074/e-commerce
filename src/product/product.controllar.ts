import { Request, Response } from "express"
import { productServices } from "./product.services"
import { TProductValidationSchema } from "./product.validation";
const getsearchProductsFromDB =async( req:Request,res:Response)=>{
    try {
        const searchTerm= req.query.searchTerm
        console.log(searchTerm);
        const result = await productServices.searchProductsFromDB(searchTerm as string)
        
        if(result.length === 0){
            res.status(200).json({ 
                success: false,
                message: `No Products matching search term ${searchTerm} found!`,
                data: result,
              });
            return;
        }
if (!searchTerm) {
    res.status(200).json({ 
        success: true,
        message: `Products fetched successfully!`,
        data: result,
      });
}

        res.status(200).json({ 
            success: true,
            message: `Products matching search term ${searchTerm} fetched successfully!`,
            data: result,
          });
    } catch (error) {
        res.status(500).json({
            success:false,
            message: 'somthing went worng',
            error: error,
          });
    }
    }
const createProduct =async(req:Request,res:Response)=>{
    try {
        const product =req.body
        const validatedData = TProductValidationSchema.parse(product);
        const result =await productServices.createProductIntoDB(validatedData )
        res.status(200).json({
            success: true,
            message: 'product is created succesfully',
            data: result,
          });
    } catch (error) {
        res.status(500).json({
            success:false,
            message: 'somthing went worng',
            error: error,
          });
    }
    }

 const getAllProduct =async(req:Request,res:Response)=>{

     try {
       
         const result = await productServices.getAllProductIntoDB()
        res.status(200).json({
             success: true,
             message: "Products fetched successfully!",
            data: result,
           });
     } catch (error) {
         res.status(500).json({
            success:false,
             message: 'somthing went worng',
             error: error,
           }); 
     }

}

const getSingleProduct =async( req:Request,res:Response)=>{
try {
    const {productId} = req.params
    console.log(req.params);
    
    const result = await productServices.getSingleProductFromDB(productId)
    res.status(200).json({
        success: true,
        message: "Product fetched successfully!",
        data: result,
      });
} catch (error) {
    res.status(500).json({
        success:false,
        message: 'somthing went worng',
        error: error,
      });
}
}


const updateProduct =async( req:Request,res:Response)=>{
try {
    const {productId} = req.params
 const updateData =req.body
    console.log(updateData);
    
    const result = await productServices.updateProductFromDB(productId,updateData)
    res.status(200).json({
        success: true,
        message: "Product updated successfully!",
        data: result,
      });
} catch (error) {
    res.status(500).json({
        success:false,
        message: 'somthing went worng',
        error: error,
      });
}
}

const deleteProduct =async( req:Request,res:Response)=>{
    try {
        const {productId} = req.params
        console.log(req.params);
        
        const result = await productServices.deleteProductFromDB(productId)
        res.status(200).json({
            success: true,
            message: "Product deleted successfully!",
            data: result,
          });
    } catch (error) {
        res.status(500).json({
            success:false,
            message: 'somthing went worng',
            error: error,
          });
    }
    }
     


    export const productControllers ={
        createProduct,
         getAllProduct,
        getSingleProduct,
        updateProduct,
        deleteProduct,
        getsearchProductsFromDB
    }