const mongoose=require('mongoose')


const userSchema=new mongoose.Schema({
    name:{type:String,required:true},
    age:{type:Number,required:true},
    email:{type:String,unique:true,required:true},
    password:{type:String,required:true}
},{timestamps:true})

module.exports=mongoose.model("usercollection",userSchema)