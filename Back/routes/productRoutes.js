import express from "express";

import { addProduct, fetchProduct } from "../controllers/Product.js";
import upload from "../middlewares/multer.js";

const productRouter = express.Router();

productRouter.post("/add", upload.single("image"), addProduct);
productRouter.get("/get", fetchProduct);

export default productRouter;
