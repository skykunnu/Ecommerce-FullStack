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

export async function fetchHotDeals(req,res){
  try {

      const hotDeals=await Product.find({
        discountedPrice:{$gte:1000}
      })
      res.status(200).json(hotDeals);
    } catch (error) {
      console.log(error)
      res.status(500).json({ error: "Internal server error" });
    }
}



export async function fetchProduct(req, res) {
  try {
    let query={}
    if(req.query.category){
      query.category={$regex: new RegExp(`^${req.query.category}$`,"i")};
    }
    

    const products = await Product.find(query);
    res.send(products);
  } catch (error) {
    res
      .status(500)
      .send({ message: "Product not added", Error: error.message });
  }
}

export async function fetchCategories(req, res) {
  try {
    const category = await categoryModel.find({});
    res.send(category);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}




export async function addCategory(req, res) {
  try {
    const file = req.file;
    if (!file) return res.status(404).send({ message: "File Not Found" });
    const secure_url = await uploadToCloudinary(req);

    const newCategory = new categoryModel({ ...req.body, image: secure_url });
    await newCategory.save();
    res.status(201).send({ message: "Category Added" });
  } catch (error) {
    res
      .status(500)
      .send({ message: "Category not added", Error: error.message });
  }
}
