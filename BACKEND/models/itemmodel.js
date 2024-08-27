const mongoose=require("mongoose")
const itemchema=mongoose.Schema({
    productname:String,
    description:String,
    price:String,
    dis:String,
    sku:String,
    quentity:String,
    photo:String,
    p_catogry:String,
    p_tags:String,
   

},{
    timestamps:true

})

const itemmodel=mongoose.model("Products",itemchema)

module.exports = itemmodel;

/*const mongoose=require("mongoose");

//define the schema
const ItemSchema = new mongoose.Schema({
    productname:{
        type:String,
        required: true,
    },
    description:{
        type:String,
        required: true,
    },
    price:{
        type:String,
        required: true,
    },
    dis:{
        type:String,
    },
    sku:{
        type:String,
        required: true,
    },
    quentity:{
        type:String,
        required: true,
    },
    photo:{
        type:String,
        required: true,
    },
    p_catogry:{
        type:String,
        required: true,
    },
    p_tags:{
        type:String,
    }
});

//Create the model using the schema
const itemmodel=mongoose.model("Products",itemchema)
module.exports = itemmodel;*/

module.exports = itemmodel;
