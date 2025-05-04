import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Cards from "./Cards";
import ProductsFilterPage from "./ProductsFilterPage";
import styled from "styled-components";
import "./Style.css";


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

const Products = () => {

  // const refElement=useRef("");
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
  const [sliderValue, setSliderValue] = useState([6000000]);
  const [selectedCompany,setSelectedCompany] = useState(1);

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

 

  const onSearch = (searchText) => {
    if (searchText === "") {
      setSearchContainer(container);
    } else {
      const searchFilters = container.filter((item) => item.name.toLowerCase().includes(searchText)  || 
                                                      item.category.toLowerCase().includes(searchText));
      // refElement.current.focus();
      setSearchContainer(searchFilters);
    }
  };

  const filterByCompany = (item) => {
    if (item.target.value === "1") {
      setSearchContainer(container);
    } 
    else if (item.target.value === "2") {
      const fCompany = container?.filter((item) => item.company.includes("apple"));
      setSearchContainer(fCompany);
    } 
    else if (item.target.value === "3") {
      const fCompany = container.filter((item) => item.company.includes("samsung"));
      setSearchContainer(fCompany);
    } 
    else if (item.target.value === "4") {
      const fCompany = container.filter((item) => item.company.includes("dell"));
      setSearchContainer(fCompany);
    } 
    else if (item.target.value === "5") {
      const fCompany = container.filter((item) => item.company.includes("nokia"));
      setSearchContainer(fCompany);
    } 
    else if (item.target.value === "6") {
      const fCompany = container.filter((item) => item.company.includes("asus"));
      setSearchContainer(fCompany);
    } 
    else if (item.target.value === "7") {
      const fCompany = container.filter((item) => item.company.includes("rolex"));
      setSearchContainer(fCompany);
    }
  };

  const clearFilters = () => {
    setSearchContainer(container);
    setFiltersList([]);
    setSearch("");
    setSliderValue([6000000]);
    setSelectedCompany(1);
    setIsChecked({
      mobile: false,
      laptop: false,
      computer: false,
      accessories: false,
      watch: false,
    });
  };

  const filterByPrice = (e) => {
    setSliderValue(e.target.value);
    // const fContainer = container.filter((item) => item.price <= sliderValue)
    // setSearchContainer(fContainer);
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

  return (
    <>
      <H1Gadgets> Gadgets </H1Gadgets>
      <Form>
        <Form.Control
          value={search}
          className="inputBar"
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
          <Col xs={12} md={5} lg={3}>
            <ProductsFilterPage
              isChecked={isChecked}
              checkHandler={checkHandler}
              filterByCompany={filterByCompany}
              filterByPrice= {filterByPrice}
              clearFilters={clearFilters}
              sliderValue={sliderValue}
              selectedCompany={selectedCompany}
              setSelectedCompany={(val) => setSelectedCompany(val)}
            />
          </Col>

          <Col>
            <Row>
              {filtersList.length
                ?  searchContainer
                    ?.filter((item) => filtersList.includes(item.category))
                    ?.map((item, i) => {
                      return (
                        <>
                          <Cards key={i} item={item} />
                        </>
                      );
                    })
                : searchContainer?.map((item,i) => {
                    return (
                      <>
                        <Cards key={i} item={item} />
                      </>
                    );
                  })}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Products;
