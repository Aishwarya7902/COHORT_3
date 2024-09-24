const mongoose=require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

//userSchema
const userSchema=new mongoose.Schema({
    email: { type: String, unique: true },
    password:String,
    firstName:String,
    lastName:String
})
//adminSchema
const adminSchema=new mongoose.Schema({
    email:{type:String,unique:true},
    password:String,
    firstName:String,
    lastName:String
})

//courseSchema

const courseSchema=new mongoose.Schema({
  title:String,
  description:String,
  price:Number,
  imageUrl:String,
  creatorId:ObjectId

})

//purchaseSchema

const purchaseSchema=new mongoose.Schema({
    userId:ObjectId,
    courseId:ObjectId
})

const userModel=mongoose.model("user",userSchema);
const adminModel=mongoose.model("admin",adminSchema);
const courseModel=mongoose.model("course",courseSchema);
const purchaseModel=mongoose.model("purchase",purchaseSchema);

module.exports={
    userModel,
    adminModel,
    courseModel,
    purchaseModel
}