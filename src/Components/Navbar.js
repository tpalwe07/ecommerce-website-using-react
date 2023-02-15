import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import { useState,useEffect } from 'react';
import {useNavigate } from 'react-router-dom';


const Navbarbt = () => {

  const history = useNavigate();
  const loginKey=JSON.parse(localStorage.getItem("activeLogin"))
  
  const[ loginBtn , toggleLoginBtn ]=useState("Login");

  useEffect(()=>{
    if(loginKey){
      toggleLoginBtn("logout")
    }else{
      toggleLoginBtn("login")
    }
  },loginKey)
  // const logoutBtn=localStorage.removeItem("activeLogin")

  const handleOnClick = (e) => {
    e.preventDefault();
    if(!loginKey){
      history("/login");
    }
    else{
      localStorage.removeItem("activeLogin");
      toggleLoginBtn("Login")
      history("/login")
    }
  }

    // const history=useNavigate();
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" style={{justifyContent:'flex-end'}} >
          <Nav
            className=" my-2 my-lg-0  "
            style={{ maxHeight: '100px'}}
            navbarScroll
          >
            <Nav.Link href="/" style={{paddingRight:'3rem'}}>Home</Nav.Link>
            {/* <NavDropdown title="Products" style={{paddingRight:'3rem'}} id="navbarScrollingDropdown"> */}
              {/* <NavDropdown.Item href="/men" style={{paddingRight:'3rem'}}>Products</NavDropdown.Item> */}
              {/* <NavDropdown.Item href="/women">  Women </NavDropdown.Item> */}
              {/* <NavDropdown.Item href="/kids">Kids</NavDropdown.Item> */}
            {/* </NavDropdown> */}
            <Nav.Link href="/products" style={{paddingRight:'3rem'}}>Products</Nav.Link>

            <Nav.Link href="/contact" style={{paddingRight:'3rem'}}>Contact</Nav.Link>
            <Nav.Link  onClick={handleOnClick} style={{paddingRight:'3rem'}}>{loginBtn}</Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarbt;
