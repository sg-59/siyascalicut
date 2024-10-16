const mongoose=require('mongoose')

const Gmailschema=new mongoose.Schema({
    email:{type:String,required:true,unique:true},
    otp:{type:String,required:true},
    expirytime:{type:Date,required:true},
})

module.exports=mongoose.model('siyasnodemailer',Gmailschema) 