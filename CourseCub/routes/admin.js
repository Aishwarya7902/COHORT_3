const express=require('express');
const adminRouter=express.Router();
const zod=require('zod');
const jwt = require("jsonwebtoken");
const { adminModel,courseModel } = require('../db');
const {JWT_ADMIN_PASSWORD}=require('../config')
const {adminMiddleware} =require('../backend/middlewares/admin')

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

adminRouter.post("/course",adminMiddleware,async function(req,res){
    const adminId=req.userId;
    const {title,description,price,imageUrl}=req.body;
    const course=await courseModel.create({
        title,
        description,
        price,
        imageUrl,
        creatorId:adminId
    })
    res.json({
        message:"Course Created Successfully",
        courseId:course._id
    })
})

//update a course

adminRouter.put("/course",adminMiddleware,async function(req,res){
    const adminId=req.userId;
    const {title,description,price,imageUrl,courseId}=req.body;
    const course=await courseModel.updateOne({
        _id:courseId,
        creatorId:adminId //creator of the course can only update it....no one else can
    },
        {
        title,
        description,
        price,
        imageUrl,
    })
    if(!course){
        res.status(411).jsonp({
            message:"You are trying to update someone else's course"
        })
    }
    res.json({
        message:"Course Updated Successfully",
        courseId:course._id
    })
})
//get all the courses

adminRouter.get("/course/bulk",adminMiddleware,async function(req,res){
    const adminId=req.userId;
    const courses=await courseModel.find({
        creatorId:adminId
    })

    res.json({
        message:"Your courses are:-",
        courses
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