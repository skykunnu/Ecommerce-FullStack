import express from "express"
import {registerUser, loginUser, checkInWishlist, addToWishlist, getWishlist} from "../controllers/user.js";
import {check} from "../middlewares/auth.js"
const userRouter=express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/checkInWishlist/:slug",check,checkInWishlist);
userRouter.post("/addToWishlist/",check,addToWishlist);
userRouter.post("/getWishlist",check,getWishlist);
export default userRouter;