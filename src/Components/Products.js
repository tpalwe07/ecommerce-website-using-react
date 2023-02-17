import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import Cards from "./Cards";
import ProductsFilterPage from "./ProductsFilterPage";

const Products = () => {
  const [isChecked, setIsChecked] = useState({
    mobile: false,
    laptop: false,
    computer: false,
    accessories: false,
    watch: false,
  });
  const [container, setContainer] = useState([]);
  const [filtersList, setFiltersList] = useState([]);
  const [search, setSearch] = useState("");
  const [searchContainer, setSearchContainer] = useState([]);
  const [sliderValue, setSliderValue] = useState([0]);

  const checkHandler = (e) => {
    const categoryName = e.target.name;
    const categoryChecked = e.target.checked;
    // console.log(categoryName, categoryChecked);
    setIsChecked({ ...isChecked, [categoryName]: categoryChecked });
  };

  useEffect(() => {
    let newItems = [];
    Object.keys(isChecked)?.map((key) => {
      if (isChecked[key]) {
        newItems.push(key);
      }
    });
    setFiltersList(newItems);
  }, [isChecked]);

  // console.log(filtersList);

  const onSearch = (searchText) => {
    if (searchText === "") {
      setSearchContainer(container);
    } else {
      const searchFilters = container.filter((item) => {
        if (
          item.name.toLowerCase().includes(searchText) ||
          item.category.toLowerCase().includes(searchText)
        ) {
          return container;
        }
      });
      setSearchContainer(searchFilters);
    }
  };

  const filterByCompany = (item) => {
    if (item.target.value === "1") {
      setSearchContainer(container);
    } else if (item.target.value === "2") {
      const fCompany = container.filter((item) => {
        if (item.company.includes("apple")) {
          return container;
        }
      });
      setSearchContainer(fCompany);
    } else if (item.target.value === "3") {
      const fCompany = container.filter((item) => {
        if (item.company.includes("samsung")) {
          return container;
        }
      });
      setSearchContainer(fCompany);
    } else if (item.target.value === "4") {
      const fCompany = container.filter((item) => {
        if (item.company.includes("dell")) {
          return container;
        }
      });
      setSearchContainer(fCompany);
    } else if (item.target.value === "5") {
      const fCompany = container.filter((item) => {
        if (item.company.includes("nokia")) {
          return container;
        }
      });
      setSearchContainer(fCompany);
    } else if (item.target.value === "6") {
      const fCompany = container.filter((item) => {
        if (item.company.includes("asus")) {
          return container;
        }
      });
      setSearchContainer(fCompany);
    } else if (item.target.value === "7") {
      const fCompany = container.filter((item) => {
        if (item.company.includes("rolex")) {
          return container;
        }
      });
      setSearchContainer(fCompany);
    }
  };

  const clearFilters = (e) => {
    setSearchContainer(container);
    setFiltersList([]);
    setIsChecked({
      mobile: false,
      laptop: false,
      computer: false,
      accessories: false,
      watch: false,
    });
  };

  const rangeSelector = (e,newValue) =>{
    setSliderValue(e.target.value);
    // console.log(e.target.value);
  }
  useEffect(() => {
    fetch("https://api.pujakaitem.com/api/products")
      // .then(response => console.log(response.json() ))
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setContainer(data);
        setSearchContainer(data);
      })
      .catch((err) => console.error(err));
  }, []);

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
        <Form.Control
          value={search}
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
            onSearch(e.target.value.toLowerCase());
          }}
          size="lg"
          type="text"
          placeholder="Enter text here"
        />
      </Form>
      <Container>
        <Row>
          <Col xs={3}>
            <ProductsFilterPage
              isChecked={isChecked}
              checkHandler={checkHandler}
              filterByCompany={filterByCompany}
              clearFilters={clearFilters}
              sliderValue={sliderValue}
              rangeSelector={rangeSelector}
            />
          </Col>

          <Col>
            {/* <Row>
              {filtersList.length
                ? container
                    .filter((item) => {
                      return filtersList.includes(item.category);
                    })
                    .map((item) => {
                      return (
                        <>
                          <Cards item={item} />
                        </>
                      );
                    })
                : container.map((item) => {
                    return (
                      <>
                        <Cards item={item} />
                      </>
                    );
                  })}
            </Row> */}
            <Row>
              {filtersList.length
                ? searchContainer
                    ?.filter((item) => {
                      return filtersList.includes(item.category);
                    })
                    ?.map((item) => {
                      return (
                        <>
                          <Cards item={item} />
                        </>
                      );
                    })
                : searchContainer?.map((item) => {
                    return (
                      <>
                        <Cards item={item} />
                      </>
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
