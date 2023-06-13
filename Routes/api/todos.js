const express=require('express')
const todos=require('../../Schemas/todos')

const router=express.Router()

router.post('/',async(req,res)=>{
    try{
        const body=req.body
        const presentUser=req.presentUser
        const todo=await todos.create({
            title:body.title,
            description:body.description,
            dueDate:body.dueDate,
            createdBy:presentUser.user
        })
        res.json({todo})
    }catch(error){
        res.json({message:error.message})
    }
})


router.get('/',async(req,res)=>{
    try{
        const presentUser=req.presentUser
        console.log(presentUser)
        console.log(presentUser.user)
        const data=await todos.find({createdBy:presentUser.user})
        console.log(data)
        res.json({data})
    }catch(error){
        res.json({message:error.message})
    }
})

router.get('/:id',async(req,res)=>{
    try{

        const id=req.params.id
        const data=await todos.findOne({_id:id})
        res.json({data})
    }catch(error){
        res.json({message:error.message})
    }
})

router.patch('/:id',async(req,res)=>{
    try{
        const id=req.params.id
        const edit=await todos.updateOne({_id:id},{$set:req.body})//{runValidators:true})
        res.json({edit})
    }catch(error){
        res.json({message:error.message})
    }
})

router.delete('/:id',async(req,res)=>{
    try{const id=req.params.id
    const destroy=await todos.deleteOne({_id:id})
    res.json({destroy})}
    catch(error){
        res.json({message:error.message})
    }
})

module.exports=router