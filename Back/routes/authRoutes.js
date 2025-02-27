import express from "express";


const authRouter=express.Router();

authRouter.get("/check", (req,res)=>{
    res.send({message: "User Authenticated"});
});

authRouter.post("/logout", async(req,res)=>{
    try{
        res.clearCookie("loginToken",{
            httpOnly:false,
            secure:false,
            sameSite:"strict",
        });
        res.status(200).send({message: "Logged Out"});
    } catch(error){
        return res.status(500).send({error: error.message});
    }
});
export default authRouter;