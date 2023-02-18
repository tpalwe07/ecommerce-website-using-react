import React from "react";
import styled from "styled-components";
import { Slide } from "react-slideshow-image";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "react-slideshow-image/dist/styles.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { margin } from "@mui/system";

// import { Image } from "react-bootstrap";
const Home = () => {
  const Wrapper = styled.section`
    .each-slide-effect > div {
      display: flex;
      align-items: center;
      justify-content: center;
      background-size: cover;
      height: 680px;
    }
    .each-slide-effect span {
      padding: 20px;
      font-size: 20px;
      background: #efefef;
      text-align: center;
    }
  `;

  return (
    <div>
      <Wrapper>
        <Slide autoplay={false}>
          <div className="each-slide-effect">
            <div
              style={{
                backgroundImage:
                  "url(https://cdn.shopify.com/s/files/1/0115/0272/files/2022-Earth-iPhone-SE-V3.4_35f23380-2e0d-482e-8e3c-a0ccd8384c0e_1944x.jpg?v=1658357554)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                {/* <Link to={`/details/${item.id}`}> Go somewhere </Link> */}
                <div
                  style={{
                    background: "none",
                    color: "white",
                    fontSize: "2rem",
                  }}
                >
                  Experience the most authentic
                </div>
                <Link
                  //   onMouseOver={onMouseOver1}
                  className="slideIMGButton"
                  to={"/details/thapaserialnoa"}
                  style={{
                    border: "2px solid white",
                    borderRadius: "10px",
                    background: "none",
                    color: "white",
                    fontWeight: "bolder",
                    fontSize: "2rem",
                    textDecoration: "none",
                    padding: "5px",
                    textAlign: "center",
                    width: "10rem",
                  }}
                >
                  {" "}
                  iphone X{" "}
                </Link>
                {/* <button  style={{border:'none',background:'none',color:'white',fontWeight:'bolder',fontSize:'3rem'}}>Iphone X </button > */}
              </div>
            </div>
          </div>
          <div className="each-slide-effect">
            <div
              style={{
                backgroundImage:
                  "url(https://cdn.shopify.com/s/files/1/0115/0272/files/2022-Earth-AirTag_1944x.jpg?v=1658356999)",
              }}
            ></div>
          </div>
          <div className="each-slide-effect">
            <div
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1444525873963-75d329ef9e1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80)",
              }}
            ></div>
          </div>
        </Slide>
        <h2
          style={{
            marginTop: "8rem",
            marginRight: "5rem",
            marginLeft: "5rem",
          }}
        >
          Featured Products
        </h2>
        <CardGroup
          style={{
            marginTop: "2rem",
            marginRight: "5rem",
            marginLeft: "5rem",
          }}
        >
          <Card
            style={{
              width: "18rem",
              marginLeft: "1rem",
              marginTop: "1rem",
              backgroundColor: "#f7f5f5",
            }}
          >
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <Card.Body>
              <Card.Title>Dell Series Laptop</Card.Title>
              <Card.Text>Rating : 4.2/5</Card.Text>
              <Card.Text>7,02,899 Rs</Card.Text>
              <Link
                style={{
                  backgroundColor: "black",
                  color: "white",
                  textDecoration: "none",
                  padding: "12px 140px",
                  borderRadius: "5px",
                }}
                to={"/details/thapaserialnoc"}
              >
                {" "}
                Go somewhere{" "}
              </Link>
            </Card.Body>
          </Card>
          <Card
            style={{
              width: "18rem",
              marginLeft: "1rem",
              marginTop: "1rem",
              backgroundColor: "#f7f5f5",
            }}
          >
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <Card.Body>
              <Card.Title>Samsung S20 5G</Card.Title>
              <Card.Text>Rating : 4.4/5</Card.Text>

              <Card.Text>5,00,000 Rs</Card.Text>
              <Link
                style={{
                  backgroundColor: "black",
                  color: "white",
                  textDecoration: "none",
                  padding: "12px 140px",
                  borderRadius: "5px",
                }}
                to={"/details/thapaserialnob"}
              >
                {" "}
                Go somewhere{" "}
              </Link>
            </Card.Body>
          </Card>
          <Card
            style={{
              width: "18rem",
              marginLeft: "1rem",
              marginTop: "1rem",
              backgroundColor: "#f7f5f5",
            }}
          >
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <Card.Body>
              <Card.Title>Premium iwatch</Card.Title>
              <Card.Text>Rating : 4.6/5</Card.Text>
              <Card.Text>1,09,999 Rs</Card.Text>
              <Link
                style={{
                  backgroundColor: "black",
                  color: "white",
                  textDecoration: "none",
                  padding: "12px 140px",
                  borderRadius: "5px",
                }}
                to={"/details/thapaserialnoi"}
              >
                {" "}
                Go somewhere{" "}
              </Link>
            </Card.Body>
          </Card>
        </CardGroup>
      </Wrapper>
    </div>
  );
};

export default Home;
