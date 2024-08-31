const express=require('express');
const app=express();
function middleWare(req,res,next){
  const currenTimestamp=new Date().toISOString();
  console.log(currenTimestamp);
  console.log(req.method);
  console.log(req.url);
  
}
app.get("/sum",middleWare,(req,res)=>{
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  return res.json({
    sum:a+b
  });
})

app.get("/multiply",middleWare,(req,res)=>{
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  return res.json({
    multiply:a*b
  });
})

app.get("/subtract",middleWare,(req,res)=>{
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  return res.json({
    subtract:a-b
  });
})
app.get("/divide",middleWare,(req,res)=>{
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  return res.json({
    divide:a/b
  });
})

app.post("/message",middleWare,(req,res)=>{
  return res.json({
    message:"Hello World"
  });
})

app.listen(3000)