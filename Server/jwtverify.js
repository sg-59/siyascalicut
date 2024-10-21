const jwt=require('jsonwebtoken')

const verifyToken=(req,res,next)=>{
    try{
console.log("req.params.id",req.params.id);
console.log("req.headers.token",req.headers.token);
const token=req.headers.token

if(token){
jwt.verify(token,process.env.jwtseckey,(err,data)=>{
if(err) return res.status(401).json("token is not authenticated")
    console.log("final answer",data);
if(data.id==req.params.id){
    next()
}else{
    console.log("user and id is not match");
    return res.status(401).json("user and id is not match")
}
    
})
}else{
    return res.status(401).json("token is not available")
}


    }catch(err){

    }
}

module.exports=verifyToken