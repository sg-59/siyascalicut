const user=require('../Model/userSchema')
const crypto=require('crypto-js')
const jwt=require('jsonwebtoken')
const logged=async(req,res)=>{
try{
const finduser=await user.findOne({email:req.body.email})
if(!finduser){
    return res.status(401).json("not email")
}
const hashedpassword=await crypto.AES.decrypt(finduser.password,process.env.seckey)
console.log("hashedpassword",hashedpassword);
const originalpassword=await hashedpassword.toString(crypto.enc.Utf8)
console.log(originalpassword);
if(req.body.password!=originalpassword){
    return res.status(401).json("email and password doesn'nt match")
}

const accesstoken=jwt.sign({id:finduser._id},process.env.jwtseckey,{expiresIn:'1d'})

return res.status(200).json({token:accesstoken})
}catch(err){
return res.status(500).json(err.message)
}
}

module.exports=logged