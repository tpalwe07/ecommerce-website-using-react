import React from "react";
import { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Loginpage = () => {
  const history = useNavigate();

  const [inputText, setText] = useState({
    email: "",
    password: "",
  });
  // const [flag, setFlag] = useState(false);

  const handleOnChange = (e) => {
    setText({ ...inputText, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const getUserArr = localStorage.getItem("users");
    // console.log(getUserArr)
    if (!inputText.email || !inputText.password) {
      // alert("all fields are mandatory");
      toast.error("all fields are mandatory");
    } else {
      if (getUserArr && getUserArr.length) {
        const userData = JSON.parse(getUserArr);

        const userLogin = userData.filter((e) => {
          return (
            e.email === inputText.email && e.password === inputText.password
          );
        });
        if (userLogin.length === 0) {
          // alert("wrong credential");
          toast.error("wrong credential");
        } else {
          // console.log("user login successfully");
          const data = [];
          localStorage.setItem(
            "activeLogin",
            JSON.stringify([...data, inputText])
          );
          history("/");
          // setFlag(true);
        }
      } else {
        // alert("We don't have account with this mail id, please register")
        toast.error(
          "we don not have account registered with this mail, please register"
        );
      }
    }
  };
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
    <MDBContainer className="my-5">
      <MDBCard>
        <MDBRow className="g-0">
          <MDBCol md="3">
            <MDBCardImage
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
              alt="login form"
              className="rounded-start w-100"
            />
          </MDBCol>

          <MDBCol md="4">
            <MDBCardBody className="d-flex flex-column">
              <div className="d-flex flex-row mt-2">
                <MDBIcon
                  fas
                  icon="cubes fa-3x me-3"
                  style={{ color: "#ff6219" }}
                />
                {/* <span className="h1 fw-bold mb-0">Logo</span> */}
              </div>

              <h5
                className="fw-normal my-4 pb-3"
                style={{ letterSpacing: "1px" }}
              >
                Sign into your account
              </h5>

              <MDBInput
                wrapperClass="mb-4"
                placeholder="Enter your email"
                id="formControlLg"
                type="email"
                name="email"
                value={inputText.email}
                onChange={handleOnChange}
                size="lg"
              />
              <MDBInput
                wrapperClass="mb-4"
                placeholder="Enter your password"
                id="formControlLg"
                type="password"
                name="password"
                value={inputText.password}
                onChange={handleOnChange}
                size="lg"
              />

              <Button
                className="mb-4 px-5 "
                color="dark"
                onClick={handleSubmit}
                size="lg"
              >
                Login
              </Button>
              {/* <a className="small text-muted" href="#!">Forgot password?</a> */}
              <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                Don't have an account?{" "}
                <a href="#!" style={{ color: "#393f81" }}>
                  <span>
                    <Link to="/register">Register here</Link>
                  </span>
                </a>
              </p>

              {/* <div className='d-flex flex-row justify-content-start'>
                <a href="#!" className="small text-muted me-1">Terms of use.</a>
                <a href="#!" className="small text-muted">Privacy policy</a>
              </div> */}
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
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
    </MDBContainer>
  );
};

export default Loginpage;
