import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Figure from "react-bootstrap/Figure";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";

const Details = () => {
  const { id } = useParams();
  const [container, setContainer] = useState(null);
  const [loading, setLoading] = useState(false);

const loginKey = JSON.parse(localStorage.getItem("activeLogin"));

  const [newUserID, setNewUserID] = useState(id);
  const [userIdArr, setUserIdArr] = useState([]);

 
  const onCartClick = () => {
    if (!loginKey) {
      return alert("oops you are not login");
    } 
    else {
      setUserIdArr([newUserID,id]);
      localStorage.setItem("Ids",JSON.stringify(userIdArr))
    }
  };

  const getProductDetails = () => {
    setLoading(true);
    fetch(`https://api.pujakaitem.com/api/products?id=${id}`)
      // .then(response => console.log(response.json() ))
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setLoading(false);
        setContainer(data);
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
      });
  };

  useEffect(() => {
    getProductDetails();
  }, []);
  const Button = styled.button`
    border: 0px;
    height: 2.7rem;
    color: white;
    font-size: 1.2rem;
    border-radius: 5px;
    color: white;
    background-color: black;
  `;
  return (
    <div>
      {console.log(container)}
      <Container style={{ marginTop: "4rem " }}>
        {!loading && container ? (
          <Row>
            <Col>
              <Container>
                <Row>
                  <Col xs={3}>
                    {container?.image?.map((item) => {
                      return (
                        <Figure>
                          <Figure.Image
                            width={140} //671
                            height={180} //480
                            // alt="471x380"
                            src={item?.url}
                          />
                        </Figure>
                      );
                    })}
                  </Col>
                  <Col>
                    <Figure>
                      <Figure.Image
                        width={640} //671
                        height={180} //480
                        // alt="471x380"
                        src={
                          "https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        }
                      />
                    </Figure>
                  </Col>
                </Row>
              </Container>
            </Col>
            <Col xs={5}>
              <h1 style={{marginBottom:'2rem'}}>{container?.name || "Product Name"}</h1>
              <h4>Rating : {container.stars} / 5</h4>
              <div style={{marginBottom:'1rem'}}>{container?.description || "Description"}</div>
              <h5 style={{marginBottom:'1rem'}}>{container.reviews} reviews</h5>
              <h1 style={{marginBottom:'1rem'}}>₹{container?.price || "0"}</h1>
              <Button
                onClick={onCartClick}
                className="mb-4 px-5 "
                color="dark"
                size="lg"
              >
                Add To Cart
              </Button>
            </Col>
          </Row>
        ) : (
          <h1>Loading...</h1>
        )}
      </Container>
    </div>
  );
};

export default Details;
