const express=require('express');
const { purchaseModel, courseModel } = require('../db');
const courseRouter=express.Router();

courseRouter.post("/purchase",userMiddleware,async function(req,res){
    const userId=req.userId;
    const courseId=req.courseId;
    await purchaseModel.create({
        userId,
        courseId
    })
    res.json({
        message:"Course Purchased Successfully"
    })
})

// previewing a course
courseRouter.get("preview",function(req,res){
    const courses=courseModel.find({})
    res.json({
        message:"Course Preview:",
        courses
    })
})

module.exports={
    courseRouter
}