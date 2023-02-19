import React from "react";
import styled from "styled-components";

const Contact = () => {
  const MapImg = styled.div`
    border: 0;
    margin-top: 3rem;
    @media (max-width: 700px) {
      margin-bottom: 140px;
    }
  `;
  return (
    <MapImg>
      <iframe
        title="This is a unique title"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15121.706883607216!2d73.74070243955079!3d18.644837800000012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9f1ca8dab03%3A0x6237cfbd36f9acf9!2sD.Y.%20Patil%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1676228073842!5m2!1sen!2sin"
        width="100%"
        height="450"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </MapImg>
  );
};

export default Contact;
