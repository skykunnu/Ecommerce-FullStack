import express from "express"

import { addProduct } from "../controllers/Product.js"
import upload from "../middlewares/multer.js";




const productRouter=express.Router();

productRouter.post('/product/add', upload.single("image") ,addProduct);

export default productRouter;
