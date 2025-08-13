

const express=require("express");
const router=express.Router();

router.get("/",(req,res)=>{
    res.json({message:"here are the details of user name (miraj, rashmi, sabnam) "});
})

router.get("/:name",(req,res)=>{
    res.json({message:`the name of the user is ${req.params.name}`});
})

module.exports=router;