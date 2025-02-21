import express from "express";
import cors from "cors";
import { connectDB } from "./connection/Db.js";
import productRouter from "./routes/productRoutes.js";
import "dotenv/config"




// CORS is a browser feature that does not allow  different origins to share data among each other.




const app = express();
const port = process.env.PORT;




app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use("/api", productRouter);

connectDB();



app.listen(port, () => {
  console.log("Server started at " + port);
});
