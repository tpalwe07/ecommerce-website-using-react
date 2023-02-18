import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';
import { BsInstagram,BsTwitter,BsLinkedin,BsGithub } from "react-icons/bs";

export default function Footerpage() {
  return (
    <MDBFooter className='text-center' color='dark'  style={{marginTop:'15rem',backgroundColor: 'rgb(5 5 4 / 79%)'}}>
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
        <a className='text-white' href='https://github.com/tpalwe07'>
           https://github.com/tpalwe07
        </a>
      </div>
    </MDBFooter>
  );
}
