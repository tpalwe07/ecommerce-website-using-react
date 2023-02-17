import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Figure from "react-bootstrap/Figure";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const [container, setContainer] = useState(null);
  const [loading, setLoading] = useState(false);

  const nevigate=useNavigate()
  
  const loginKey=JSON.parse(localStorage.getItem("activeLogin"))
  const onCartClick=()=>{
    if(!loginKey){
      return alert("Opps you are not login")
    }else{
      // nevigate("/cart")
      // console.log(container.id);
      alert("added successfully")

    }
  }

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
                            src={"https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80"}
                          />
                        </Figure>
                  </Col>
                </Row>
              </Container>
            </Col>
            <Col xs={5}>
              <h1>{container?.name || "Product Name"}</h1>
              <div>{container?.description || "Description"}</div>
              <h1>₹{container?.price || "0"}</h1>
              <Button  onClick={onCartClick} className="mb-4 px-5 " color="dark" size="lg">
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
