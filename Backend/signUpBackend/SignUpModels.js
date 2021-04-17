const mongoose = require('mongoose')
const signUpTemplate = new mongoose.Schema({

        name:{ 
            type:String,
            required:true
        },
        mobile:{
            type:Number,
            required:true,
            unique:true
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        message:{
            type:String,
            required:true
        },
        date:{
            type:Date,
            default:Date.now()
        }

})


module.exports = mongoose.model("mytable",signUpTemplate)