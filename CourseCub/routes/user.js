const express=require('express');
const { userModel } = require('../db');
const userRouter=express.Router();
const jwt=require('jsonwebtoken')
const JWT_USER_PASSWORD="hellouser12"
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

//purchase

userRouter.get("/purchase",function(req,res){
    res.json({
        message:"Purchase Successful"
    })
})

// see the bought course
userRouter.get("/courses",function(req,res){
    res.json({
        message:"Your bought courses are:"
    })
})

module.exports={
    userRouter
}