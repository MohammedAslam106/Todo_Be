const timespan = require('jsonwebtoken/lib/timespan')
const { default: mongoose } = require('mongoose')
const mongo=require('mongoose')

const todos= new mongo.Schema({
    title:{
        type:String,
        minLength:3,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true
    },
    dueDate:{
        type:Date,
        required:true
    },
    createdAt:{
        type:Date,
        default:()=> new Date(),
        immutable:true
    },
    updatedAt:{
        type:Date,
        default:()=> new Date()
    },
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:'User'
    }

})

const Todo=new mongo.model('Todo',todos)

module.exports=Todo