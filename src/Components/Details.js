import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Figure from "react-bootstrap/Figure";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Details = () => {
  const { id } = useParams();
  const [container, setContainer] = useState([]);

  useEffect(() => {
    fetch(`https://api.pujakaitem.com/api/products?id=${id}`)
      // .then(response => console.log(response.json() ))

      .then((response) => {
        return response.json();
      })

      .then((data) => {
        setContainer(data);
      })
      .catch((err) => console.error(err));
  }, []);
  const Button=styled.button`
      border:0px;
      height:2.7rem;
      color:white;
      font-size: 1.2rem;
      border-radius:5px;
      color:white;
      background-color:black;`
  return (
    <div>
      {console.log(container)}
      <Container style={{ marginTop: "4rem " }}>
        <Row>
          <Col>
            {container.image.map((item) => {
              return (
                <Figure>
                  <Figure.Image
                    width={671} //671
                    height={480} //480
                    // alt="471x380"
                    src={item.url}
                  />
                </Figure>
              );
            })}
          </Col>
          <Col>
            <h1>{container.name}</h1>
            <div>{container.description}</div>
            <h1>₹{container.price}</h1>
            <Button className="mb-4 px-5 " color='dark'  size='lg'>Add To Cart</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Details;
