import React, { Suspense, lazy, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Button from "./components/Button/index";
import { HookInput } from "./components/BasicInputField";
import Header from "./components/Header";
import SignUp from "./pages/SignUp";
import ForgetPassword from "./pages/ForgetPassword";
import Login from "./pages/Login";
import ChangePassword from "./pages/ChangePassword/index";

function App() {
  return (
    <div>
      <Router>
        <Route exact path={"/"} component={SignUp} />
        <Route exact path={"/forget_password"} component={ForgetPassword} />
        <Route exact path={"/login"} component={Login} />
        <Route exact path={"/change_password"} component={ChangePassword} />
      </Router>
    </div>
  );
}

export default App;
