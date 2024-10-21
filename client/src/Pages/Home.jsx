import React from 'react'
import { useDispatch } from 'react-redux'
import { logoutData } from './Redux/userslice'
import { Link } from 'react-router-dom'

const Home = () => {
const dispatch=useDispatch()
    function logout(){
dispatch(logoutData())
    }

  return (
    <div>
        <h1>Home page</h1>
      <Link to={'/profile'}><h3>Profile</h3></Link>  
        <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Home