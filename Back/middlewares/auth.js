import jwt from "jsonwebtoken";
import "dotenv/config";
import User from "../models/userModel.js";

export async function check(req, res, next) {
  const token = req.cookies.LoginToken;
  if (!token) return res.status(401).send({ message: "No Token Found" });

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  const user = await User.findById(decoded.id).select("-password");

  if (!user) {
    return res.status(401).json({ message: "USER NOT FOUND" });
  }

  req.user = user;
  next();
}
