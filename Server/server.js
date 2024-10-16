const express=require('express')
const app=express()
const mongoose=require('mongoose')
require('dotenv').config()
const cors=require('cors')

app.use(cors())

const userRouter=require('./Router/userRouter')
const authRouter=require('./Router/authrouter')

mongoose.connect(process.env.MongoUrl).then(()=>{
    console.log("Data base is connected");
    
}).catch((err)=>{
    console.log("******************************",err.message);
    
})


app.use(express.json())

app.use('/siyas',userRouter)
app.use('/api',authRouter)


app.listen(7000,()=>{
    console.log("port is connected");
    
})









