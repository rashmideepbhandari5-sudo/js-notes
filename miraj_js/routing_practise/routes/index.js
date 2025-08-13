const express=require("express");
const router=express.Router();

const user_router=require("../modules/user/user.routes")
const product_router = require("../modules/products/product.routes")

router.use("/users",user_router);
router.use("/products",product_router);

module.exports=router;