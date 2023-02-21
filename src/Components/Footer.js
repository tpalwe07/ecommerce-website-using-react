import React from 'react';
import {
  MDBFooter,
  MDBContainer
} from 'mdb-react-ui-kit';
import { BsInstagram,BsTwitter,BsLinkedin,BsGithub } from "react-icons/bs";
import styled from 'styled-components';

export default function Footerpage() {

const Footer=styled(MDBFooter)`
margin-top:15rem;
background-color:rgb(5 5 4 / 79%);
@media (max-width: 700px) {
  margin-top:3rem;
}
`
  return (
    <Footer className='text-center' color='light'  >
      <MDBContainer className='p-4'>
        <section className='mb-0'>
          <a href='https://www.instagram.com/tej_uss21/'><BsInstagram size={30} style={{marginRight:'1.5rem'}}  color='white'/></a>
          <a href='https://twitter.com/palwe_tejas'><BsTwitter size={30} style={{marginRight:'1.5rem'}}  color='white'/></a>
          <a href='https://www.linkedin.com/in/tejas-palwe-113829206/'><BsLinkedin  style={{marginRight:'1.5rem'}} size={30} color='white'/></a>
          <a href='https://github.com/tpalwe07'><BsGithub size={30} color='white'/></a>
        </section>

      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgb(5 5 4 0)' ,color:'white'}}>
        © 2023 Copyright :   
        <a className='text-white' href='https://tpalwe07.github.io/'>
         https://tpalwe07.github.io/
        </a>
      </div>
    </Footer>
  );
}
