import React, { useState } from 'react'
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBInput,
    MDBIcon,
    MDBCheckbox
  }
  from 'mdb-react-ui-kit';
  import axios from 'axios'

const Signup = () => {

    const [data,setData]=useState({
        name:String,
        email:String,
        age:Number,
        password:String
    })

    function handlechange(e){
const {name,value}=e.target
setData({...data,[name]:value})
    }

    function display(){
        console.log("input values",data);
        axios.post('http://localhost:7000/siyas/postData',data).then((data)=>{
            console.log("final answer",data.data);
            
        })
    }

  return (
    <MDBContainer fluid>

    <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
      <MDBCardBody>
        <MDBRow>
          <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

            <div className="d-flex flex-row align-items-center mb-4 ">
              <MDBIcon fas icon="user me-3" size='lg'/>
              <MDBInput label='Your Name' id='form1' type='text' name='name' className='w-100' onChange={handlechange}/>
            </div>

            <div className="d-flex flex-row align-items-center mb-4">
              <MDBIcon fas icon="envelope me-3" size='lg'/>
              <MDBInput label='Your Email' id='form2' type='email' name='email' onChange={handlechange}/>
            </div>

            <div className="d-flex flex-row align-items-center mb-4" >
              <MDBIcon fas icon="lock me-3" size='lg'/>
              <MDBInput label='Password' id='form3' type='password' name='password' onChange={handlechange}/>
            </div>

            <div className="d-flex flex-row align-items-center mb-4">
              <MDBIcon fas icon="key me-3" size='lg'/>
              <MDBInput label='Age' id='form4' type='number' name='age' onChange={handlechange}/>
            </div>

            <div className='mb-4'>
              <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
            </div>

            <MDBBtn className='mb-4' size='lg' onClick={display}>Register</MDBBtn>

          </MDBCol>

          <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
            <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
          </MDBCol>

        </MDBRow>
      </MDBCardBody>
    </MDBCard>

  </MDBContainer>
  )
}

export default Signup