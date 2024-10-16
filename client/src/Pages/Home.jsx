import React from 'react'
import { useDispatch } from 'react-redux'
import { logoutData } from './Redux/userslice'

const Home = () => {
const dispatch=useDispatch()
    function logout(){
dispatch(logoutData())
    }

  return (
    <div>
        <h1>Home page</h1>
        <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Home