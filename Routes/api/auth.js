const express=require('express')
const router=express.Router()

const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')

const user=require('../../Schemas/users')

router.post('/signup',async(req,res)=>{
    try{
        const body=req.body
        const hashPassword=bcrypt.hashSync(body.password,10)
        const newUser=await user.create({
            name:body.name,
            username:body.username,
            password:hashPassword

        })
        res.json(newUser)
    }catch(error){
        res.json({error:error.message})
    }
})

router.post('/signin',async(req,res)=>{
    try{
        const body=req.body
        const data=await user.findOne({username:body.username})
        if(!data){
            res.status(400).json({message:'user not found'})
            return
        }
        const confirmPassword=bcrypt.compareSync(body.password,data.password)
        console.log(confirmPassword,body.password,data.password)
        if(!confirmPassword){
            res.status(402).json({message:'incorrect password'})
            return
        }
        else{
            const token=jwt.sign({username:body.username,password:body.password,user:data._id},"I don't know")
            res.json({message:token})
        }
    }catch(error){
        res.json({message:error.message})
    }
})

module.exports=router