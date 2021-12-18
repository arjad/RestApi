const express = require("express");
const router = express.Router();
const Post = require("../model/post")

router.get("/",(req,res)=>{
    res.send("we are on posts")
})
router.post("/",(req,res)=>{
    console.log(req.body);
})
module.exports = router;