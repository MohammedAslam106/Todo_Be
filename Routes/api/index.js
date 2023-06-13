const express=require('express')

const auth=require('./auth')
const todos=require('./todos')
const verification=require('../../midleware/Authentication')

const route=express.Router()

route.use('/auth',auth)

route.use(verification)

route.use('/todo',todos)

module.exports=route
