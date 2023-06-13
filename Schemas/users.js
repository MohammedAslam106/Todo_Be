const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        minLength:5,
        maxLength:20,
        reuqired:true
    },
    username:{
        type:String,
        required:true,
        unique:true,
        
    },
    password:{
        type:String,
        required:true,
        minLength:5
    },


})

const Users=new mongoose.model('User',userSchema)

module.exports=Users