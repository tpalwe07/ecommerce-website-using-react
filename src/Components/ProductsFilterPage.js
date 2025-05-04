import React from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";

const ProductsFilterPage = ({
  isChecked,
  checkHandler,
  filterByCompany,
  clearFilters,
  sliderValue,
  selectedCompany,
  setSelectedCompany,
  filterByPrice
}) => {
  return (
    <div>
      <h3>Shop By</h3>
      <Form.Label style={{ margin: "1rem 0px 2px 0px" }}>Price ( products will be shown from 0 to selected value )</Form.Label>
      {/* <Form.Range value={sliderValue} onChange={rangeSelector} />  */}
      <Box sx={{ width: 300 }}>
        <Slider
          aria-label="Price"
          value={sliderValue}
          onChange={(e) => {
            filterByPrice(e);
          }}
          getAriaValueText={() => `Price Range`}
          valueLabelDisplay="auto"
          step={10000}
          marks
          min={12600}
          max={6000000}
        />
      </Box>
      <Form.Label style={{ margin: "1rem 0px 2px 0px" }}>Category</Form.Label>
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
      <Form.Label style={{ margin: "0.5rem 0px 2px 0px" }}>Company</Form.Label>
      <div className="input-group mb-3">
        <select
          style={{ margin: "1rem 0px 2px 0px", paddingRight: "1rem" }}
          className="custom-select"
          id="inputGroupSelect01"
          value={selectedCompany}
          onChange={(e) => {
            filterByCompany(e);
            setSelectedCompany(e.target.value);
          }
          }
        >
          <option value="1">
            {" "}
            All{" "}
          </option>
          <option value="2"> Apple </option>
          <option value="3"> Samsung </option>
          <option value="4"> Dell </option>
          <option value="5"> Nokia </option>
          <option value="6"> Asus </option>
          <option value="7"> Rolex </option>
        </select>
      </div>
      {/* <Form.Label style={{margin:'1rem 0px 2px 0px'}}>Colors</Form.Label> */}
      <Button
        onClick={clearFilters}
        style={{ margin: "0rem 0px 2px 0px" }}
        variant="danger"
      >
        Clear Filters
      </Button>{" "}
    </div>
  );
};

export default ProductsFilterPage;
