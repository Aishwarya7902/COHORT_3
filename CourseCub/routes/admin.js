const express=require('express');
const adminRouter=express.Router();
const zod=require('zod');
const jwt = require("jsonwebtoken");
const { adminModel } = require('../db');
const JWT_ADMIN_PASSWORD="helloadmin1";
//signup schema zod


//signup

adminRouter.post("/signup",async (req,res)=>{
    
   const {email,password,firstName,lastName}=req.body;
   // TODO : zod validation

   //TODO : check if already present in DB

   //TODO : hash the password

   await adminModel.create({
    email,
    password,
    firstName,
    lastName
   })

   res.json({
    message:"Admin Created Successfully"
   })

})

//signin

adminRouter.post("/signin",async function(req,res){
    const {email,password}=req.body;

    //TODO : do zod validation

    //check if Admin is in db or not

    const admin=await adminModel.findOne({
        email:email,
        password:password
    })

    //if admin is in db , let them signin and give them a token

    if(admin)
    {
        const token=jwt.sign({
            id:admin._id,
        },JWT_ADMIN_PASSWORD);

        res.json({
            message:"Admin Signed In",
            token:token
        })
    }

    else{
        res.json({
            message:"Invalid Credentials"
        })
    }
})

//create a course

adminRouter.put("/course",function(req,res){
    res.json({
        message:"Course Created Successfully"
    })
})

//get all the courses

adminRouter.get("courses/bulk",function(req,res){
    res.json({
        message:"These are the courses:"
    })
})

//delete a course

adminRouter.delete("/course",function(req,res){
    res.json({
        message:"Course deleted successfully"
    })
})

module.exports={
    adminRouter
}