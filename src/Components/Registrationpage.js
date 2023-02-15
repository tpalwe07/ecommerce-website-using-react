import React from 'react';
import { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,    
  MDBInput,
  MDBCheckbox,
}
  from 'mdb-react-ui-kit';
import { Link,useNavigate } from 'react-router-dom';
import styled from 'styled-components';


function Registrationpage() {

  const history=useNavigate()

  const [inputText, setText] = useState({
    name: "",
    email: "",
    password: "",
    repeatpassword:""
})

// const [flag, setFlag] = useState(false);

const handleOnChange = (e) => {
    setText({ ...inputText, [e.target.name]: e.target.value });
}
console.log(inputText);

const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputText.name || !inputText.email || !inputText.password || !inputText.repeatpassword) {
        alert("all fields are mandatory");
    }else if( inputText.password  !== inputText.repeatpassword) {
      alert("password not matching");
    }
    else {
        // setFlag(true);
        const data=[];
        const getdata=JSON.parse(localStorage.getItem("users"))
        // console.log(getdata)
        if(getdata!=null){
             localStorage.setItem("users", JSON.stringify([...getdata, inputText]));
        }else{
            localStorage.setItem("users", JSON.stringify([...data, inputText]));
        }
        
        history("/login");    
    }
  }

  const Button=styled.button`
      border:0px;
      height:2.7rem;
      color:white;
      font-size: 1.2rem;
      border-radius:5px;
      color:white;
      background: linear-gradient(to right, rgba(132, 250, 176, 1), rgba(143, 211, 244, 1))
    `
  return (
      <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{ backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)' }}>
        <div className='mask gradient-custom-3'></div>
        <MDBCard className='m-5' style={{ maxWidth: '600px' }}>
          <MDBCardBody className='px-5'>
            <h2 className="text-uppercase text-center mb-5">Create an account</h2>
            <form >
            <MDBInput name="name" value={inputText.name} onChange={handleOnChange} wrapperClass='mb-4' placeholder='Enter your name' size='lg' id='form1' type='text' />
            <MDBInput name="email" value={inputText.email} onChange={handleOnChange} wrapperClass='mb-4' placeholder='Enter your email' size='lg' id='form2' type='email' />
            <MDBInput name="password" value={inputText.password} onChange={handleOnChange} wrapperClass='mb-4' placeholder='Enter your password' size='lg' id='form3' type='password' />
            <MDBInput name="repeatpassword" value={inputText.repeatpassword} onChange={handleOnChange} wrapperClass='mb-4' placeholder='Repeat your password' size='lg' id='form4' type='password' />
            <div className='d-flex flex-row justify-content-center mb-4'>
              <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
            </div>
            <Button onClick={handleSubmit} className='mb-4 w-100 gradient-custom-4' size='lg'>Register</Button>
            {/* <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg'>Register</MDBBtn> */}
            <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>Already have an account? <a href="#!" style={{ color: '#393f81' }}><span><Link to="/login">Login</Link></span></a></p>
            </form>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
  );
}

export default Registrationpage;
