import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loginInfo } from './Redux/userslice';
const Login = () => {

    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
const dispatch=useDispatch()


    function display(){
console.log(email,password);
axios.post('http://localhost:7000/api/login',{email,password}).then((data)=>{
  console.log("login Info",data.data);

dispatch(loginInfo(data.data))
  
}).catch((err)=>{
  console.log(err.message);
  
})
    }

  return (
    <>
    <input type="email" placeholder='email' onChange={(e)=>setEmail(e.target.value)}/>
    <input type="password" placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>
    <button onClick={display}>click</button>
    <Link to={'/signup'}>Create an account ?</Link>
    </>
  )
}

export default Login