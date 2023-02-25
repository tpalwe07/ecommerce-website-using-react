import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Figure from "react-bootstrap/Figure";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Details = () => {
  const { id } = useParams();
  const [container, setContainer] = useState(null);
  const [loading, setLoading] = useState(false);
  const [imgIndex,setImgIndex] = useState(0);

  const loginKey = JSON.parse(localStorage.getItem("activeLogin"));

  const onCartClick = () => {
    
    if (!loginKey) {
      return toast.error("oops you are not login");
    } else {
      // let cartItems = localStorage.getItem("cart");
      // cartItems = cartItems ? JSON.parse(cartItems) : [];
      // if (cartItems.includes(id)) {
      //   return alert("Already added");
      // }
      // cartItems.push(id);
      // localStorage.setItem("cart", JSON.stringify(cartItems));

      let userEmail = loginKey[0].email;
      let cartItems = localStorage.getItem("cart");
      // console.log(cartItems);
      cartItems = cartItems ? JSON.parse(cartItems) : {};
      let userCartItems = cartItems[userEmail] ? cartItems[userEmail] : [];
      console.log(userCartItems);

      if (userCartItems.includes(id)) {
        // return alert("Already added");
        return toast.error("Already added!");
      }
      toast.success("Added Successfully!");
      cartItems[userEmail] = [...userCartItems, id];
      localStorage.setItem("cart", JSON.stringify(cartItems));
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

  useEffect(() => getProductDetails(), []);

  const Button = styled.button`
    border: 0px;
    height: 2.7rem;
    color: white;
    font-size: 1.2rem;
    border-radius: 5px;
    color: white;
    background-color: black;
  `;

  const handleImgOnclick=(index)=>{
    setImgIndex(index);
  }

  const FigureStyle=styled(Figure)`
  &:hover {
    transform: scale(1.1);
  }
  `

  return (
    <div>
      {console.log(container)}
      <Container style={{ marginTop: "4rem " }}>
        {!loading && container ? (
          <Row>
            <Col xs={12} md={12} lg={6}>
              {/* <Container>
                <Col> */}

              <Row>
                {/* {console.log(container?.image[ImgName].url)} */}
                {/* {container?.image[ImgName].url} */}
                
                <Figure>
                  <Figure.Image
                    width={640} //671
                    height={180} //480
                    // alt="471x380"
                    src={container?.image[imgIndex].url}
                  />
                </Figure>
              </Row>
              <Row xs={1} xxl={0} lg={12}>
                <Col>
                  {container?.image?.map((item,index) => {
                    return (
                      <FigureStyle>
                        <Figure.Image
                          style={{ margin: "1px" }}
                          onClick={()=>handleImgOnclick(index)}
                          width={80} //671
                          height={80} //480
                          // alt="471x380"
                          src={item?.url}
                        />
                      </FigureStyle>
                    );
                  })}
                </Col>
              </Row>
              {/* </Col>
              </Container> */}
            </Col>
            <Col xs={12} lg={6}>
              <h1 style={{ marginBottom: "2rem" }}>
                {container?.name || "Product Name"}
              </h1>
              <h4>Rating : {container.stars} / 5</h4>
              <div style={{ marginBottom: "1rem" }}>
                {container?.description || "Description"}
              </div>
              <h5 style={{ marginBottom: "1rem" }}>
                {container.reviews} reviews
              </h5>
              <h1 style={{ marginBottom: "1rem" }}>
                ₹{container?.price || "0"}
              </h1>
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
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default Details;
