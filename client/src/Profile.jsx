import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
const UserId=useSelector((state)=>state.login.logged)

const [state,setState]=useState()

console.log("userId in locallocalstorage",UserId.userId);

    useEffect(()=>{
axios.get(`http://localhost:7000/siyas/GetfullData/${UserId.userId}`).then((data)=>{
    console.log("final answer in profile page",data.data);
    setState(data.data)
})
    },[])

console.log(state);


  return (
    <div>
        <h3>Name  :{state?.name}</h3>
        <h3>Age   :{state?.age}</h3>
        <h3>Email :{state?.email}</h3>
    </div>
  )
}

export default Profile