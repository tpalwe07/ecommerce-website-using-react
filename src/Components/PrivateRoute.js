import React from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PrivateRoute = ({ children }) => {
  // const navigate= useNavigate()
  const loginKey = JSON.parse(localStorage.getItem("activeLogin"));

  if (!loginKey) {
    return (
      <>
        <Navigate to="/login" />
        {toast.error('Sorry, You cannot access cart without login, please login and continue ', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        })}
      </>
    );
  }
  return children;
};

export default PrivateRoute;
