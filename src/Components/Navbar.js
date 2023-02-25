import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import { useState,useEffect } from 'react';
import {useNavigate } from 'react-router-dom';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";

const Navbarbt = () => {

  const history = useNavigate();
  const loginKey=JSON.parse(localStorage.getItem("activeLogin"))
  
  const[ loginBtn , toggleLoginBtn ]=useState("Login");

  useEffect(()=>{
    if(loginKey){
      toggleLoginBtn("Logout")
    }else{
      toggleLoginBtn("Login")
    }
  },loginKey)
  // const logoutBtn=localStorage.removeItem("activeLogin")

  const handleOnClick = (e) => {
    e.preventDefault();
    if(!loginKey){
      history("/login");
      // toast.success("Login Successful");
    }
    else{
      localStorage.removeItem("activeLogin");
      toggleLoginBtn("Login")
      history("/login")
      toast.error("You have been logout Successfully");

    }
  }

    // const history=useNavigate();
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand style={{fontWeight:'bolder',marginLeft:'2rem',fontSize:'2rem'}} href="/">Emart</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{justifyContent:'flex-end'}} >

          <Nav
            className=" my-2 my-lg-0   "
            // style={{ maxHeight: '100px'}}
            // navbarScroll
          >
            <Nav.Link href="/" style={{paddingRight:'3rem',fontSize:'1.3rem'}}>Home</Nav.Link>
            {/* <NavDropdown title="Products" style={{paddingRight:'3rem'}} id="navbarScrollingDropdown"> */}
              {/* <NavDropdown.Item href="/men" style={{paddingRight:'3rem'}}>Products</NavDropdown.Item> */}
              {/* <NavDropdown.Item href="/women">  Women </NavDropdown.Item> */}
              {/* <NavDropdown.Item href="/kids">Kids</NavDropdown.Item> */}
            {/* </NavDropdown> */}
            <Nav.Link href="/products" style={{paddingRight:'3rem',fontSize:'1.3rem'}}>Products</Nav.Link>

            <Nav.Link href="/contact" style={{paddingRight:'3rem',fontSize:'1.3rem'}}>Contact</Nav.Link>
            <Nav.Link href="/cart" style={{paddingRight:'3rem',fontSize:'1.3rem'}} >Cart</Nav.Link>
            {/* //<AiOutlineShoppingCart size={25}/> */}
            <Nav.Link  onClick={handleOnClick} style={{paddingRight:'2rem',fontSize:'1.3rem'}}>{loginBtn}</Nav.Link>

          </Nav>
          
        </Navbar.Collapse>
      {/* <Nav.Link  onClick={handleOnClick} style={{paddingRight:'2rem',fontSize:'1.3rem'}}>{loginBtn}</Nav.Link> */}
      </Container>

      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Navbar>
  );
}

export default Navbarbt;
