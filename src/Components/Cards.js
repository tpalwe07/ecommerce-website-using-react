import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Cards = ({item}) => {
  return (
    <Card
      style={{
        width: "18rem",
        marginLeft: "1rem",
        marginTop: "1rem",
        backgroundColor: "#f7f5f5",
      }}
    >
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>
          {" "}
          {item.name} {item.category}
        </Card.Title>
        <Card.Text>{item.price} Rs</Card.Text>
        <Link to={`/details/${item.id}`}> Go somewhere </Link>
      </Card.Body>
    </Card>
  );
};

export default Cards;
