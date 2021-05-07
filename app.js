const express=require("express")
const app=express()
const port = 3030;
app.get('/',(req,res)=>{
res.send("hellow world")})

app.listen(port,()=>{
console.log("i am working")
})
