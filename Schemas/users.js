const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        minLength:3,
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
        minLength:3
    },


})

const Users=new mongoose.model('User',userSchema)

module.exports=Users