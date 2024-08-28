const express = require('express');
const router = express.Router();

const Food = require('../models/Foodmodel')

router.post("/addFood",async(req,res)=>{
    const data=new Food(req.body)
    await data.save()
    res.send({success:true,message:"data created successfuly"})
})

router.get("/foodShow",async(req,res)=>{
    const data= await Food.find({})
    
    res.json({success:true,data:data})
})

// router.put("/foodUpdate/:id",async(req,res)=>{
//     const {id,...rest}=req.body
//     const data=await Food.updateOne({_id:id},rest)
//     res.send({success:true,message:"updated successfuly",data:data})
// })


    






















module.exports = router;