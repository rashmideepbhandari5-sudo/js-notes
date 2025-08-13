require("dotenv").config();
const PORT = process.env.PORT;

const express=require("express");
const app=express();

const index_router=require("./routes/index");
app.use("/api",index_router);


app.get("/",(req,res)=>{
    res.json({message:"hello world"});
})


app.listen(PORT,()=>{
    console.log(`✅ App is running at: http://localhost:${PORT}`);
})