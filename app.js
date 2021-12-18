const http = require("https")
const express = require("express");
const app = express();
app.get("/",(req,res)=>{
    res.send("we are on home");

})
app.use("/posts",()=>{
    console.log("this is middle ware");
})
app.get("/post",(req,res)=>{
    res.send("we are on post");
    
})
app.listen(3000);