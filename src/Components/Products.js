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
import styled from "styled-components";

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

  const rangeSelector = (e, newValue) => {
    setSliderValue(e.target.value);
    // console.log(e.target.value);
  };
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
  const H1Gadgets = styled.h1`
    padding: 45px 0px 0px 40px;
    margin-top: 3rem;
    margin-right: 7rem;
    margin-left: 7rem;
    height: 11rem;
    background-color: #a76e6e;
    color: white;
    @media (max-width: 700px) {
      margin-right: 2rem;
      margin-left: 2rem;
      margin-top: 1rem;
      height: 10rem;
    }
  `;
  const SearchInput = styled(Form)`
    margin: auto;
    width: 40rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    @media (max-width: 700px) {
      width: 22rem;
    }
  `;

  const FilterColumn=styled(Col)`
  @media (max-width: 700px) {
    width: 100%;
    padding-left:1rem
  }
  `
  
  return (
    <>
      <H1Gadgets> Gadgets </H1Gadgets>
      <SearchInput>
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
      </SearchInput>
      <Container>
        <Row>
          <FilterColumn xs={3}>
            <ProductsFilterPage
              isChecked={isChecked}
              checkHandler={checkHandler}
              filterByCompany={filterByCompany}
              clearFilters={clearFilters}
              sliderValue={sliderValue}
              rangeSelector={rangeSelector}
            />
          </FilterColumn>

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
