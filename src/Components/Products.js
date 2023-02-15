import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate, Link } from "react-router-dom";

const Products = () => {
  const history = useNavigate();

  const [isChecked, setIsChecked] = useState({
    mobile: false,
    laptop: false,
    computer: false,
    accessories: false,
    watch: false,
  });
  const [container, setContainer] = useState([]);
  const [filtersList, setFiltersList] = useState([]);

  const checkHandler = (e) => {
    setIsChecked({ ...isChecked, [e.target.name]: !isChecked[e.target.name] });
  };

  useEffect(() => {
    setFiltersList([]);

    Object.keys(isChecked).forEach((key, index) => {
      if (isChecked[key] === true) {
        setFiltersList([...filtersList, key]);
        console.log(filtersList);
      } else {
        filtersList.splice(index, 1);
      }
    });
  }, [isChecked]);

  // useEffect(()=>{
  //   console.log(isChecked)
  // },[isChecked])
  // useEffect(() => {}, [isChecked]);

  fetch("https://api.pujakaitem.com/api/products")
    // .then(response => console.log(response.json() ))

    
    .then((response) => {
      return response.json();
    })

    .then((data) => {
      setContainer(data);
    })
    .catch((err) => console.error(err));
    
  return (
    <>
      <h1
        style={{
          padding: "45px 0px 0px 40px",
          marginTop: "3rem",
          marginRight: "7rem",
          marginLeft: "7rem",
          height: "11rem",
          backgroundColor: "#a76e6e",
          color: "white",
        }}
      >
        Gadgets
      </h1>
      <Form
        style={{
          margin: "auto",
          width: "40rem",
          marginTop: "2rem",
          marginBottom: "2rem",
        }}
      >
        <Form.Control size="lg" type="text" placeholder="Enter text here" />
      </Form>
      <Container>
        <Row>
          <Col xs={3}>
            <h3>Shop By</h3>
            <Form.Label style={{ margin: "1rem 0px 2px 0px" }}>
              Price
            </Form.Label>
            <Form.Range />
            <Form.Label style={{ margin: "1rem 0px 2px 0px" }}>
              Category
            </Form.Label>
            <Form.Check
              name="mobile"
              checked={isChecked.mobile}
              onChange={checkHandler}
              label="Mobile"
            />
            <Form.Check
              name="laptop"
              checked={isChecked.laptop}
              onChange={checkHandler}
              label="Laptop"
            />
            <Form.Check
              name="computer"
              checked={isChecked.computer}
              onChange={checkHandler}
              label="Computer"
            />
            <Form.Check
              name="accessories"
              checked={isChecked.accessories}
              onChange={checkHandler}
              label="Accessories"
            />
            <Form.Check
              name="watch"
              checked={isChecked.watch}
              onChange={checkHandler}
              label="Watch"
            />
            <Form.Label style={{ margin: "1rem 0px 2px 0px" }}>
              Company
            </Form.Label>
            <DropdownButton
              style={{ margin: "1rem 0px 2px 0px" }}
              variant="outline-secondary"
              title="All"
              id="bg-nested-dropdown"
            >
              <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
              <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
            </DropdownButton>
            {/* <Form.Label style={{margin:'1rem 0px 2px 0px'}}>Colors</Form.Label> */}
            <Button style={{ margin: "2rem 0px 2px 0px" }} variant="danger">
              Clear Filters
            </Button>{" "}
          </Col>

          <Col>
            <Row>
              {/* filter((item)=>item.category.includes(data)). */}
              {filtersList.length
                ? container
                    .filter((item) => {
                      return filtersList.includes(item.category);
                    })
                    .map((item) => {
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
                            <Button to={`/details/${item.id}`} variant="primary">Go somewhere</Button>
                          </Card.Body>
                        </Card>
                      );
                    })
                : container.map((item) => {
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
                          <Link to={`/details/${item.id}`} > Go somewhere </Link>
                        </Card.Body>
                      </Card>
                    );
                  })}
            </Row>
          </Col>
        </Row>
      </Container>
      );
    </>
  );
};

export default Products;
