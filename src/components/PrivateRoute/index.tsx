import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }: any) => {
  const token = localStorage.getItem("accessToken");
  
  return token ? children : <Navigate to="/" />;
};

export default PrivateRoute;
