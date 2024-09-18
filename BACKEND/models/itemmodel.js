const mongoose=require("mongoose");
const { isNumber } = require("util");
const itemSchema=mongoose.Schema({
    productname:{
        type:String,
        required: true,
    },
    description:{
        type:String,
        required: true,
    },
    price:{
        type:Number,
        required: true,
    },
    dis:{
        type:Number,
    },
    sku:{
        type:String,
        required: true,
    },
    quantity:{
        type:Number,
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
({
    timestamps:true

})

const itemmodel=mongoose.model("Product",itemSchema)

module.exports = itemmodel;

