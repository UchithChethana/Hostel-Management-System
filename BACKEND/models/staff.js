const mongoose=require('mongoose');

const Schema = mongoose.Schema;

const staffSchema = new Schema({

    Firstname : {
        type : String ,
        required:true
    },

    Lastname : {
        type :String ,
        required : true
    },

    Age : {
        type : Number,
        required : true
    },

    Jobposition : {
        type :String ,
        required : true
    },

    Email : {
        type : CharacterData,
        required : true
    },

    Phone : {
        type : Number,
        required : true
    },


    NIC : {
        type : CharacterData,
        required : true
    }

    
})