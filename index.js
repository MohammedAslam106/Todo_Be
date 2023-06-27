const express=require('express')

const cors=require('cors')

const MONGO_DB_SERVER=process.env.MONGO_DB_SERVER

const routes=require('./Routes/api')

// const bodyParser = require("body-parser")

require('dotenv').config()



const mongoose=require('mongoose')

mongoose.connect(`${process.env.MONGO_DB_SERVER}/todos`)

const app=express()

app.use(express.json())
app.use(cors())
// app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api',routes)

app.listen(process.env.PORT ?? 3000,()=>{
    console.log('listening on port 3000')
})

