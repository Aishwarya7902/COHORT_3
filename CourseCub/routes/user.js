const express=require('express');
const { userModel, purchaseModel, courseModel } = require('../db');
const jwt=require('jsonwebtoken')
const {userMiddleware} =require('../middlewares/user')

const userRouter=express.Router();

const {JWT_USER_PASSWORD}=require('../config')
//signup
userRouter.post("/signup",async function(req,res){
    const {email,password,firstName,lastName}=req.body;
    //TODO: add zod valid validation

    //TODO: hash password

    //TODO: check if already present in db

    await userModel.create({
       email,
       password,
       firstName,
       lastName
    })

    res.json({
        message:"Signup Successful"
    })
})

//signin

userRouter.post("/signin",async function(req,res){
    const {email,password}=req.body;
    //search in DB ,if user is there or not

    // TODO: ideally password should be hashed, and hence you cant compare the user provided password and the database password
    const user=await userModel.findOne({ //either the user or undefined
        email:email,
        password:password
    })
   // if user exists in DB , let them signin and give them a jwt token
    if(user){
      const token=jwt.sign({
        id:user._id
      },JWT_USER_PASSWORD)

    // TODO : do cookie logic
      res.json({
        message:"Signed In Successfully",
        token:token
      })
    }
    else{
        res.status(403).json({
            message:"Invalid Credentials"
        })
    }
})

//see all the purchased courses

userRouter.get("/purchases",userMiddleware,async function(req,res){
    const userId=req.userId;
    const purchases=await purchaseModel.find({
        userId
    })

    const courseData=await courseModel.find({
        _id:{$in:purchases.map(x=>x.courseId)}
    });

    res.json({
        purchases,
        courseData
    })
})



module.exports={
    userRouter
}