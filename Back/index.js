import express from "express"

const port=4000;
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.post('/api/product/add', (req,res)=>{
    console.log(req.body)
})

app.listen(port, (req, res)=>{
  console.log("Server started at"+port);  
})
