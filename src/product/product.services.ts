
import { TProduct } from "./product.interface";
import Product from "./product.model";


const createProductIntoDB = async (productData: TProduct) => {

    const result = await Product.create(productData);

    return result;
  };
//  const getAllProductIntoDB = async()=>{

//    const result = await Product.find();
//    return result;
//  }
const getSingleProductFromDB =async (productId:string)=>{
  
const result = await Product.findById({_id:productId})
return result
}
const updateProductFromDB =async (productId:string ,updateData:TProduct)=>{
  
  const result = await Product.updateOne({ _id: productId }, { $set: updateData });
return result
}

const deleteProductFromDB =async (productId:string)=>{
  
  const result = await Product.deleteOne({_id:productId})
  return result
  }
const searchProductsFromDB =async (searchTerm :string)=>{
  const regex = new RegExp(searchTerm, );
  const query = {
    $or: [
      { name: { $regex: regex } },
      { description: { $regex: regex } },
      { tags: { $regex: regex } }
    ]
  };
  const result = await Product.find(query);
  return result;

 
 
  }
 
  export const productServices={
    createProductIntoDB,
    //  getAllProductIntoDB,
    getSingleProductFromDB,
     updateProductFromDB,
     deleteProductFromDB,
     searchProductsFromDB
  }
