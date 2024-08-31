const express=require('express');
const app=express();
let count=0;
function requestMiddleWare(req,res,next){

  count++;
  next()
}
app.get("/totalRequest",requestMiddleWare,(req,res)=>{
  return res.json({
    totalRequests:count
  })
})



app.listen(3000)