import express from "express";
import cors from "cors";
import { connectDB } from "./connection/Db.js";
import productRouter from "./routes/productRoutes.js";
import "dotenv/config"



// Mongoose is a third party package that allows us to interact with MongoDB
// It is an object Data modeling (ODM) library for mongodb and nodejs

// CORS is a browser feature that does not allow  different origins to share data among each other.

// Schema is a blueprint of how data will be stored in the database. 


// Model is a class with which we construct documents.

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
