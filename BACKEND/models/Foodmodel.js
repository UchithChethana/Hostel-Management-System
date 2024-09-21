


const mongoose=require("mongoose")
const foodSchema=mongoose.Schema({
    name: { type:String , required:true},
    price: { type:Number, required:true},
    quantity: { type:Number, required:true},
    category: { type: String, required:true},
    description: { type: String, required:true},
    // image: { type: String, required:true},
   

},{
    timestamps:true

})

const Food=mongoose.model("Food",foodSchema)

module.exports = Food;