const user=require('../Model/userSchema')
const Gmail=require('../Model/gmailSchema')
const nodemailer=require('nodemailer')
const crypto=require('crypto-js')
const postInfo=async(req,res)=>{

    req.body.password=crypto.AES.encrypt(req.body.password,process.env.seckey)

    try{
        console.log("react data",req.body);
        
        const newdata=await user.create(req.body)
    console.log(req.body);
    res.status(200).json({BackendData:newdata})
    }catch(err){
    res.status(500).json(err)
    }
}

const getData=async(req,res)=>{
try{
const fullData=await user.find()
console.log("fulldata",fullData);

res.status(200).json(fullData)
}catch(err){
res.status(500).json(err)
}
}


const singleData=async(req,res)=>{
    try{
console.log("id ?",req.body);
const singleData=await user.findOne({email:req.body.Email})
res.status(200).json({success:singleData})
    }catch(err){
res.status(500).json(err)
    }
}

const sinDatainQuery=async(req,res)=>{
    console.log("req.query ?",req.query);
    
    try{
const userData=await user.findOne({email:req.query.gmail})
res.status(200).json(userData)
    }catch(err){
res.status(500).json(err)
    }
}


const updateData=async(req,res)=>{
    console.log(req.body);
    console.log(req.query);
    
    
    try{
const updatedData=await user.findOneAndUpdate({email:req.query.gmail},{$set:{email:req.body.Email,name:req.body.Name,age:req.body.Age}},{new:true})
res.status(200).json(updatedData)
    }catch(err){
res.status(500).json(err)
    }
}

const deleteUser=async(req,res)=>{
    try{
await user.findOneAndDelete({email:req.query.hello})
res.status(200).json({message:"File Deleted"})
    }catch(err){
res.status(500).json(err)
    }
}

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "maddison53@ethereal.email",
      pass: "jn7jnAPss4f63QBp6D",
    },
  });


function otpcreated(){
  return  Math.round(Math.random()*10000+1000).toString()
}

const Nodemailerdata=(async(req,res)=>{

const otp=otpcreated()
const {email}=req.body
const expirytime=new Date().getTime()+5*60*10000

    try{
const responsedata=await Gmail.create({otp,email,expirytime})
res.status(200).json({message:"success",data:responsedata})
    }catch(err){
res.status(500).json(err)
    }
})


module.exports={postInfo,getData,singleData,sinDatainQuery,updateData,deleteUser,Nodemailerdata}