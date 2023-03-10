import React from "react";
import styled, { keyframes } from "styled-components";
import { Slide } from "react-slideshow-image";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "react-slideshow-image/dist/styles.css";
import { Link } from "react-router-dom";

// import { Image } from "react-bootstrap";
const Home = () => {
  const Wrapper = styled.section`
    .each-slide-effect > div {
      display: flex;
      align-items: center;
      justify-content: center;
      background-size: cover;
      height: 670px;
      @media (max-width: 700px) {
        height: 380px;
        // width:50px
      }
    }
    .each-slide-effect span {
      padding: 20px;
      font-size: 20px;
      background: #efefef;
      text-align: center;
    }
  `;
  const GroupCard = styled(CardGroup)`
    margin-top: 2rem;
    margin-right: 5rem;
    margin-left: 5rem;
    @media (max-width: 700px) {
      margin-left: 0.5rem;
      margin-right: 0.5rem;
    }
  `;
  const Cards = styled(Card)`
    width: 24rem;
    margin-left: 1rem;
    margin-top: 1rem;
    margin-right: 1.5rem;
    background-color: #f7f5f5;
    @media (max-width: 700px) {
      width: 21rem;
      
    }
    &:hover {
      transform: scale(1.1);
    }
  `;
  const CardButtonLink = styled(Link)`
    color: black;
    font-weight: bold;
    font-size: 18px;
    text-decoration: none;
    &:hover {
      text-decoration: none;
      color: black;
    }
  `;
  const moveToRight = keyframes`
  0% {
    transform: translateY(100px);
  }
  100% {
    transform: translateY(0px);
  }
  `;
  const SliderSecTextDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: ${moveToRight} 0.5s ease-out;
    animation-delay: 1000ms;
    // animation-iteration-count: 2;
    // animation-direction: reverse;
}
  `;
  const SliderUpperTextDiv = styled.div`
    background: none;
    color: white;
    font-size: 2rem;
    @media (max-width: 700px) {
      font-size: 1rem;
    }
  `;

  const SliderButton = styled(Link)`
    border: 2px solid white;
    border-radius: 10px;
    background: none;
    color: white;
    // font-weight: bolder;
    font-size: 2rem;
    text-decoration: none;
    padding: 5px;
    text-align: center;
    width: 10rem;
    @media (max-width: 700px) {
      width: 6rem;
      font-size: 1rem;
      font-weight: normal;
    }
    &:hover {
      color: white;
      // background-color: #ffffff63;
      // border-color: #ffffff63;
      transform: scale(1.1);
    }
  `;

  return (
    <div>
      <Wrapper>
        <Slide autoplay={true}>
          <div className="each-slide-effect">
            <div
              style={{
                backgroundImage:
                  "url(https://cdn.shopify.com/s/files/1/0115/0272/files/2022-Earth-iPhone-SE-V3.4_35f23380-2e0d-482e-8e3c-a0ccd8384c0e_1944x.jpg?v=1658357554)",
              }}
            >
              <SliderSecTextDiv>
                <SliderUpperTextDiv>
                  {" "}
                  Experience the most authentic{" "}
                </SliderUpperTextDiv>
                <SliderButton to={"/details/thapaserialnoa"}>
                  {" "}
                  iphone X{" "}
                </SliderButton>
              </SliderSecTextDiv>
            </div>
          </div>
          <div className="each-slide-effect">
            <div
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
              }}
            ></div>
          </div>
          <div className="each-slide-effect">
            <div
              style={{
                backgroundImage:
                  "url(https://c4.wallpaperflare.com/wallpaper/995/560/1024/models-model-lena-anderson-woman-wallpaper-preview.jpg)",
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
        <GroupCard>
          <CardButtonLink to={"/details/thapaserialnoc"}>
            <Cards>
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <Card.Body>
                Dell Series Laptop
                <Card.Text>Rating : 4.2/5</Card.Text>
                <Card.Text>7,02,899 Rs</Card.Text>
              </Card.Body>
            </Cards>
          </CardButtonLink>
          <CardButtonLink to={"/details/thapaserialnob"}>
            <Cards>
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <Card.Body>
                Samsung S20 5G
                <Card.Text>Rating : 4.4/5</Card.Text>
                <Card.Text>5,00,000 Rs</Card.Text>
              </Card.Body>
            </Cards>
          </CardButtonLink>
          <CardButtonLink to={"/details/thapaserialnoi"}>
            <Cards>
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <Card.Body>
                Premium iwatch
                <Card.Text>Rating : 4.6/5</Card.Text>
                <Card.Text>1,09,999 Rs</Card.Text>
              </Card.Body>
            </Cards>
          </CardButtonLink>
        </GroupCard>
      </Wrapper>
    </div>
  );
};

export default Home;
