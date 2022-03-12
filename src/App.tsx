import React, { Suspense, lazy, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import Button from "./components/Button/index";
import { HookInput } from "./components/BasicInputField";
import Header from "./components/Header";
import SignUp from "./pages/Register";
import ForgetPassword from "./pages/ForgetPassword";
import Login from "./pages/Login";
import ChangePassword from "./pages/ChangePassword";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import Bookmark from "./pages/Bookmark";
import PostProduct from "./pages/PostProduct";
import Profile from "./pages/Profile";
import ProductDesc from "./pages/ProductDesc/index";
import ViewCategory from "./pages/ViewCategory";
import Contact from "./pages/ContactUs";
import Homepage from "./pages/Homepage";
import VerifyEmail from "./pages/VerifyEmail/index";
import IdleTimer from "./utils/idleTimer";

function App() {
  useEffect(() => {
    const timer = new IdleTimer({
      timeout: 120, //expire after 3 mins
      onTimeout: () => {
        window.location.href = "/login";
        localStorage.clear();
      },
      onExpired: () => {
        window.location.href = "/login";
        localStorage.clear();
      },
    });

    return () => {
      timer.cleanUp();
    };
  }, []);

  return (
    <div className="relative">
      <Router>
        <Header />
        <main>
          <Route exact path={"/"} component={Homepage} />
          <Route exact path={"/verify_email"} component={VerifyEmail} />
          <Route exact path={"/dashboard"} component={Dashboard} />
          <Route exact path={"/sign_up"} component={SignUp} />
          <Route exact path={"/forget_password"} component={ForgetPassword} />
          <Route exact path={"/login"} component={Login} />
          <Route exact path={"/change_password"} component={ChangePassword} />
          <Route exact path={"/bookmark"} component={Bookmark} />
          <Route exact path={"/post_product"} component={PostProduct} />
          <Route exact path={"/profile/"} component={Profile} />
          <Route exact path={"/product_desc"} component={ProductDesc} />
          <Route exact path={"/view_categories"} component={ViewCategory} />
          <Route exact path={"/contact_us"} component={Contact} />
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
