require('dotenv').config();
console.log(process.env.MONGO_URL)
const express=require('express');
const mongoose=require('mongoose');
const {userRouter}=require('./routes/user')
const {adminRouter}=require('./routes/admin')
const {courseRouter}=require('./routes/course')


const app=express();
app.use(express.json())


app.use("/api/v1/user",userRouter);
app.use("/api/v1/admin",adminRouter);
app.use("/api/v1/course",courseRouter);

async function main(){
  const dbUrl=process.env.MONGO_URL
   await mongoose.connect(dbUrl)
    app.listen(3000);
}

main();
