const express=require('express');
const { purchaseModel, courseModel } = require('../db');
const {userMiddleware} =require('../middlewares/user')
const courseRouter=express.Router();

courseRouter.post("/purchase",userMiddleware,async function(req,res){
    const userId=req.userId;
    const courseId=req.body.courseId;
    await purchaseModel.create({
        userId,
        courseId
    })
    res.json({
        message:"Course Purchased Successfully"
    })
})

// previewing a course
courseRouter.get("/preview",async function(req,res){
    const courses=await courseModel.find({})
    res.json({
        message:"Course Preview:",
        courses
    })
})

module.exports={
    courseRouter
}