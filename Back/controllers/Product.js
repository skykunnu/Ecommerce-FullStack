import Product from "../models/ProductModel.js";

export async function addProduct(req, res) {
  console.log(req.file);
  try {
    const newProduct = new Product({ ...req.body, image: req.file.path });
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
