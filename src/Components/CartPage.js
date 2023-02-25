import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { useState, useEffect } from "react";

import { MdDelete } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";


export default function ProductCards() {
  const [container, setContainer] = useState([]);
  const [fetchedCartItems, setFetchedCartItems] = useState([]);

  const [noOfItem, setNoOfItem] = useState("1");
  // const [fetchedCartItems, setFetchedCartItems] = useState([]);

  const loginKey = JSON.parse(localStorage.getItem("activeLogin"));
  const userEmail = loginKey[0].email;
  const cartItems = JSON.parse(localStorage.getItem("cart"));

  // console.log(cartItems[userEmail]);

  // useEffect(()=> {

  const productsId = cartItems[userEmail];

  useEffect(() => {
    if (container.length && productsId.length) {
      let cartItemsLocal = container
        .filter((item) => productsId.includes(item.id))
        .map((item) => {
          item.quantity = 1;
          return item;
        });
      setFetchedCartItems(cartItemsLocal);
    }
  }, [container]);

  // let items = [];
  // productsId?.map((item) =>
  //   fetch(`https://api.pujakaitem.com/api/products?id=${item}`)
  //     // .then(response => console.log(response.json() ))
  //     .then((response) => {
  //       return response?.json();
  //     })
  //     .then((data) => {
  //       setFetchedCartItems([...fetchedCartItems, data]);
  //       items.push(data);
  //       console.log("data:",data);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     })
  // );

  // console.log("items:",items);
  // }, []);

  // useEffect(()=> {
  //   console.log(fetchedCartItems.length);
  // }, [fetchedCartItems])

  // console.log(container)
  useEffect(() => {
    fetch("https://api.pujakaitem.com/api/products")
      // .then(response => console.log(response.json() ))
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setContainer(data);
        // setSearchContainer(data);
      })
      .catch((err) => console.error(err));
  }, []);

  const deleteCartItem = (id) => {
    if (!productsId.includes(id)) {
      alert("already removed");
    } else {
      const index = productsId.indexOf(id);
      productsId.splice(index, 1);
      cartItems[userEmail] = productsId;
      // console.log(cartItems);
      localStorage.setItem("cart", JSON.stringify(cartItems));

      // update cart items state
      let cartItemsLocal = container
        .filter((item) => productsId.includes(item.id))
        .map((item) => {
          item.quantity = 1;
          return item;
        });
      setFetchedCartItems(cartItemsLocal);
      toast.success('Item removed successfully!');
    }
  };

  const changeProductQuantity = (e, index) => {
    // let total=0;
    //  total=total+amount
    let cartItemsLocal = fetchedCartItems;

    cartItemsLocal[index] = {
      ...cartItemsLocal[index],
      quantity: e.target.value,
    };
    console.log(cartItemsLocal[index]);

    setFetchedCartItems(cartItemsLocal);
  };

  console.log(noOfItem);

  return (
    <section className="h-100" style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol md="10">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <MDBTypography tag="h3" className="fw-normal mb-0 text-black">
                Shopping Cart
              </MDBTypography>
              <div>
                <p className="mb-0">
                  <span className="text-muted">Sort by:</span>
                  <a href="#!" className="text-body">
                    price <i className="fas fa-angle-down mt-1"></i>
                  </a>
                </p>
              </div>
            </div>

            {fetchedCartItems?.map((item, index) => (
              <MDBCard className="rounded-3 mb-4">
                <MDBCardBody className="p-4">
                  <MDBRow className="justify-content-between align-items-center">
                    <MDBCol md="2" lg="2" xl="2">
                      <MDBCardImage
                        className="rounded-3"
                        fluid
                        src={item.image}
                        alt="Cotton T-shirt"
                      />
                    </MDBCol>
                    <MDBCol md="3" lg="3" xl="3">
                      <p className="lead fw-normal mb-2">{item.name}</p>
                      <p>
                        <span className="text-muted">{item.category} </span>{" "}
                        {/* <span className="text-muted">Color: </span>Grey */}
                      </p>
                    </MDBCol>
                    <MDBCol
                      md="3"
                      lg="3"
                      xl="2"
                      className="d-flex align-items-center justify-content-around"
                    >
                      <MDBBtn color="link" className="px-2">
                        <MDBIcon fas icon="minus" />
                      </MDBBtn>

                      <MDBInput
                        min={1}
                        // defaultValue={1}
                        type="number"
                        size="sm"
                        value={item.quantity}
                        onChange={(e) => changeProductQuantity(e, index)}
                      />

                      <MDBBtn color="link" className="px-2">
                        <MDBIcon fas icon="plus" />
                      </MDBBtn>
                    </MDBCol>
                    <MDBCol md="3" lg="2" xl="2" className="offset-lg-1">
                      <MDBTypography tag="h5" className="mb-0">
                        Rs.{item.price}
                      </MDBTypography>
                    </MDBCol>
                    <MDBCol md="1" lg="1" xl="1" className="text-end">
                      <button
                        style={{
                          border: "none",
                          marginRight: "4rem",
                          color: "red",
                          backgroundColor: "white",
                        }}
                      >
                        <MdDelete
                          onClick={() => deleteCartItem(item.id)}
                          size={30}
                        />
                      </button>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            ))}

            {/* lg="5" xl="3" */}
            <MDBCol yl="4">
              <div
                className="d-flex justify-content-between"
                style={{ fontWeight: "500" }}
              >
                <p className="mb-2">Subtotal</p>
                <p className="mb-2">$23.49</p>
              </div>

              <div
                className="d-flex justify-content-between"
                style={{ fontWeight: "500" }}
              >
                <p className="mb-0">Shipping</p>
                <p className="mb-0">$2.99</p>
              </div>

              <hr className="my-4" />

              <div
                className="d-flex justify-content-between mb-4"
                style={{ fontWeight: "500" }}
              >
                <p className="mb-2">Total (tax included)</p>
                <p className="mb-2">$26.48</p>
              </div>
            </MDBCol>

            <MDBCard>
              <MDBCardBody>
                <MDBBtn className="ms-3" color="warning" block size="lg">
                  Apply
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
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
        theme="light"
      />
    </section>
  );
}
