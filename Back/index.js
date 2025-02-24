import express from "express";
import cors from "cors";
import { connectDB } from "./connection/Db.js";
import productRouter from "./routes/productRoutes.js";
import "dotenv/config"
import userRouter from "./routes/userRoutes.js";

// CORS is a browser feature that does not allow  different origins to share data among each other.

const port = process.env.PORT;
const app = express();




app.use(cors({ origin: process.env.FRONTEND_URI }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use("/api/product", productRouter);
app.use("/api/user", userRouter);

connectDB();



app.listen(port, () => {
  console.log("Server started at " + port);
});
