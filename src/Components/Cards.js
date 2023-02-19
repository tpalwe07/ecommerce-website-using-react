import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import './Component.css';
const Cards = ({ item }) => {
  const CardButtonLink = styled(Link)`
    color: black;
    font-weight: bold;
    font-size: 18px;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
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
  `;
  return (
    <ProductCard>
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <CardButtonLink id="cartNameButton" to={`/details/${item.id}`}>
          {" "}
          {item.name} {item.category}{" "}
        </CardButtonLink>
        <Card.Text>{item.price} Rs</Card.Text>
      </Card.Body>
    </ProductCard>
  );
};

export default Cards;
