const http = require("https")
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser")
const app = express();
require("dotenv/config");

app.use(bodyParser.json());

const postsRoute = require("./routes/post")
app.use("/post",postsRoute)
app.get("/",(req,res)=>{
    res.send("we are on home");
    
})

// connect to db
mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser:true},()=>{
    console.log("connecxted to db")
});
app.listen(3000);