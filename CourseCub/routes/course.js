const express=require('express');
const courseRouter=express.Router();

courseRouter.post("/purchase",function(req,res){
    res.json({
        message:"course purchased"
    })
})

// previewing a course
courseRouter.get("preview",function(req,res){
    res.json({
        message:"Course Preview"
    })
})

module.exports={
    courseRouter
}