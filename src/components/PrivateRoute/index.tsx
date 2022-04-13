import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }: any) => {
  console.log(">>>>>access", localStorage.getItem("accessToken"));
  return (
    <Route {...rest}>
      {localStorage.getItem("accessToken") ? (
        <Component />
      ) : (
        <Redirect to={"/"} />
      )}
    </Route>
  );
};

export default PrivateRoute;
