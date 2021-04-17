const mongoose = require('mongoose')
const againSignUpTemplate = new mongoose.Schema({

       
        email:{
            type:String,
            unique:true
        },
        

})


module.exports = mongoose.model("againmytable",againSignUpTemplate)