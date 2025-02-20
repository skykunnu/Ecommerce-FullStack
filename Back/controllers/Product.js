import Product from "../models/ProductModel.js";

export async function addProduct(req,res){
    try{
      const newProduct= new Product(req.body)
      newProduct.save()
      res.status(201).send("Product Added")
    }catch(error){
      res.status(500).send({message: "Product not added", Error:error.message});
    }
  }