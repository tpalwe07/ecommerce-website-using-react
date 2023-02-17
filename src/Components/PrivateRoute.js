import React from 'react'
import { Link,Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    // const navigate= useNavigate()
    const loginKey=JSON.parse(localStorage.getItem("activeLogin"))

    if(!loginKey){
        return <Navigate to="/login" />
    }
  return children 
}

export default PrivateRoute
