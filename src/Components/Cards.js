import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import './Component.css';
const CardButtonLink = styled(Link)`
  color: black;
  font-weight: bold;
  font-size: 18px;
  text-decoration: none;
  &:hover {
    text-decoration: none;
    color:black;
  }
  @media (max-width: 700px) {
    // color: red;
  }
`;
const ProductCard = styled(Card)`
  width: 18rem;
  margin-left: 1rem;
  margin-top: 1rem;
  background-color: #f7f5f5;
  @media (max-width: 700px) {
    width: 23rem;
  }
  &:hover {
    transform: scale(1.1);
  }
`;
const Cards = ({ item }) => {

  return (
    <ProductCard>
      <CardButtonLink id="cartNameButton" to={`/details/${item.id}`}>
        <Card.Img variant="top" src={item.image} />
        <Card.Body>
          {" "}
          {item.name} {item.category} <Card.Text>Rs. {item.price}</Card.Text>
        </Card.Body>
      </CardButtonLink>
    </ProductCard>
  );
};

export default Cards;
