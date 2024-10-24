import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Signup from "./Pages/Signup"
import Login from './Pages/Login'
import Home from './Pages/Home'
import { useSelector } from 'react-redux'
import Profile from './Profile'

function App() {

  const Jwt=useSelector((state)=>state.login.logged)

  
   
  const abc=createBrowserRouter([
    {
      path:'/',
      element:Jwt?.token ? <Home/> : <Login/>
    },
    {
      path:'/signup',
      element:<Signup/>
    },
    {
      path:'/home',
      element:<Home/>
    },
    {
      path:'/profile',
      element:<Profile/>
    }
  ])

  return (
    <>
<RouterProvider router={abc}></RouterProvider>
    </>
  )
}

export default App
