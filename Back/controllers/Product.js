import uploadToCloudinary from "../middlewares/cloudinary.js";
import categoryModel from "../models/CategoryModel.js";
import Product from "../models/ProductModel.js";

export async function addProduct(req, res) {
  try {
    const file = req.file;
    if (!file) return res.status(404).send({ message: "File Not Found" });
    const secure_url = await uploadToCloudinary(req);

    console.log("Secure URL:", secure_url);

    const newProduct = new Product({ ...req.body, image: secure_url });
    await newProduct.save();
    res.status(201).send("Product Added");
  } catch (error) {
    res
      .status(500)
      .send({ message: "Product not added", Error: error.message });
  }
}

export async function fetchProduct(req, res) {
  try {
    const products = await Product.find({});
    res.send(products);
  } catch (error) {
    res
      .status(500)
      .send({ message: "Product not added", Error: error.message });
  }
}

export async function fetchCategories(req,res){
  try{
    const category=await categoryModel.find({});
    res.send(category)
  }
  catch(error){
    res.status(500).send({message:error.message});
  }
}
