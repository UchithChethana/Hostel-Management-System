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

router.put("/foodUpdate/:id", async (req, res) => {
    try {
      // Retrieve the ID from the URL parameter
      const { id } = req.params;
  
      // Retrieve all the fields to update from req.body
      const updateData = req.body;
  
      // Update the document using findByIdAndUpdate, which also handles the existence check
      const updatedFood = await Food.findByIdAndUpdate(id, updateData, {
        new: true,  // Return the updated document
        runValidators: true, // Run validators on the updated fields
      });
  
      // Check if the food item was found and updated
      if (!updatedFood) {
        return res.status(404).send({ success: false, message: "Food item not found" });
      }
  
      // Send a success response with the updated document
      res.send({ success: true, message: "Updated successfully", data: updatedFood });
  
    } catch (error) {
      // Handle errors (e.g., database errors, validation errors)
      console.error(error);
      res.status(500).send({ success: false, message: "An error occurred while updating", error: error.message });
    }
  });
  

router.delete("/foodDelete/:id",async(req,res)=>{
    const id=req.params.id
    const data=await Food.deleteOne({_id:id})
    res.send({success:true,message:"deleted successfully",data:data})
    })


    router.get("/foodCount",async(req,res)=>{
        try{
            const users=await Food.find({});
    
            return res.status(200).json({
                count:users.length,
                data:users
            })
    
        }catch(err){
                console.log(err.message);
                res.json({success:true,message:"Food count successfully",data:data})
        }
    
    })
    






















module.exports = router;