const mongoose=require("mongoose")


const adminchema=mongoose.Schema({
    username:String,
    email:String,
    password:String,
 
  
  
   

},{
    timestamps:true

})

const Manager=mongoose.model("Admin",adminchema)
module.exports = Manager;

/*const mongoose=require("mongoose");

//define the schema
const InventoryManagerSchema = new mongoose.Schema({
    username:{
        type:String,
        required: true,
    },
    email:{
        type:String,
        required: true,
    },
    password:{
        type:String,
        required: true,
    }  
});

//Create the model using the schema
const Manager=mongoose.model("Admin",InventoryManagerSchema)
module.exports = Manager;*/
