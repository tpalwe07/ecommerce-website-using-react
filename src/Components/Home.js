import React from 'react'
import styled from 'styled-components';
import { Slide } from 'react-slideshow-image';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import 'react-slideshow-image/dist/styles.css';
import Button from 'react-bootstrap/Button';
// import { Image } from "react-bootstrap";
const Home = () => {

    const Wrapper = styled.section`
    .each-slide-effect > div{
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
                                backgroundImage: 'url(https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80)'
                            }}
                        >

                        </div>
                    </div>
                    <div className="each-slide-effect">
                        <div
                            style={{
                                backgroundImage: 'url(https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80)'
                            }}
                        >

                        </div>
                    </div>
                    <div className="each-slide-effect">
                        <div
                            style={{
                                backgroundImage: 'url(https://images.unsplash.com/photo-1444525873963-75d329ef9e1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80)'
                            }}
                        >

                        </div>
                    </div>
                </Slide>

                <CardGroup style={{marginTop:'10rem',marginRight:'5rem',marginLeft:'5rem'}}>
                    <Card style={{marginRight:'2rem'}} >
                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" />
                        <Card.Body>
                            <Card.Title>WOMEN SHOES COLLECTION</Card.Title>
                            <Card.Text>
                                Constructed from luxury nylons, leathers, and custom hardware,
                                featuring sport details such as hidden breathing vents, waterproof
                                + antimicrobial linings, and more.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{marginRight:'2rem'}}>
                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" />
                        <Card.Body>
                            <Card.Title>MEN SHOES COLLECTION</Card.Title>
                            <Card.Text>
                                Constructed from luxury nylons, leathers, and custom hardware,
                                featuring sport details such as hidden breathing vents, waterproof
                                + antimicrobial linings, and more.{' '}
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" />
                        <Card.Body>
                            <Card.Title> MEN SHOES COLLECTION</Card.Title>
                            <Card.Text>
                                Constructed from luxury nylons, leathers, and custom hardware,
                                featuring sport details such as hidden breathing vents, waterproof
                                + antimicrobial linings, and more.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>

                    </Card>
                </CardGroup>
            </Wrapper>
        </div>
    )
}

export default Home
