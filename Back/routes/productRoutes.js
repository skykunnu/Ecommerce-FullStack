import express from "express"

import { addProduct } from "../controllers/Product.js"


const productRouter=express.Router();

productRouter.post('/product/add',addProduct);

export default productRouter;
