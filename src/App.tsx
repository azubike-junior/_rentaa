import React, { Suspense, lazy, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
  useLocation,
  useRouteMatch,
} from "react-router-dom";
import Button from "./components/Button/index";
import { HookInput } from "./components/BasicInputField";
import Header from "./components/Header";
import SignUp from "./pages/Register";
import ForgetPassword from "./pages/ForgetPassword";
import Login from "./pages/Login";
import Footer from "./components/Footer";
// import Dashboard from "./pages/Dashboard";
import Bookmark from "./pages/Bookmark";
import PostProduct from "./pages/PostProduct";
import Profile from "./pages/Profile";
import ProductDesc from "./pages/ProductDesc/index";
import ViewCategory from "./pages/ViewCategory";
import Contact from "./pages/ContactUs";
import VerifyEmail from "./pages/VerifyEmail/index";
import IdleTimer from "./utils/idleTimer";
import VerifyPasswordSuccess from "./components/VerifyPasswordSuccess";
import Notification from "./components/Notification";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
// import VerifyEmailSuccess from "./pages/VerifyEmailSuccess";
import VerifyEmailSuccess from "./pages/VerifyEmailSuccess/index";
import ExternalUserProfile from "./pages/ExternalUserProfile/index";
import EditGadget from "./pages/EditGadget/index";
import Loader from "./components/Loader";
import ResetPassword from "./pages/ResetPassword";
import LandingPage from "./pages/LandingPage";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./pages/Dashboard";

function App() {
  // let { path, url } = useRouteMatch();

  const { showNotification } = useSelector(
    (state: RootState) => state.modalReducer
  );

  const { pathname } = useLocation();

  useEffect(() => {
    const timer = new IdleTimer({
      timeout: 300, //expire after 7 mins
      onTimeout: () => {
        window.location.href = "/";
        localStorage.clear();
      },
      onExpired: () => {
        window.location.href = "/";
        localStorage.clear();
      },
    });

    return () => {
      timer.cleanUp();
    };
  }, []);

  return (
    <div className="relative">
      {pathname === "/verify_email" ||
      pathname === "/" ||
      pathname === "/forget_password_success_response" ||
      pathname.includes("/verify_email_success") ? (
        ""
      ) : (
        <Header />
      )}
      <main>
        {/* <Switch> */}
        <Suspense fallback={<Loader />}>
          <Route exact path={"/"} component={LandingPage} />
          <Route exact path={"/verify_email"} component={VerifyEmail} />
          <Route
            exact
            path={"/forget_password_success_response"}
            component={VerifyPasswordSuccess}
          />
          <Route exact path={"/contact_us"} component={Contact} />
          <Route
            exact
            path={"/verify_email_success/:token"}
            component={VerifyEmailSuccess}
          />
          <Route
            exact
            path={"/reset_password_success/:token"}
            component={ResetPassword}
          />
          <Route exact path={"/sign_up"} component={SignUp} />
          <Route exact path={"/forget_password"} component={ForgetPassword} />
          <Route exact path={"/login"} component={Login} />
          <PrivateRoute path="/bookmark" component={Bookmark} />
          <PrivateRoute exact path={"/post_product"} component={PostProduct} />
          <PrivateRoute
            exact
            path={"/edit_gadget/:id"}
            component={EditGadget}
          />
          <PrivateRoute exact path={"/profile"} component={Profile} />
          <PrivateRoute
            exact
            path={"/product_description/:id"}
            component={ProductDesc}
          />
          <PrivateRoute
            exact
            path={"/more_gadget_description/:id"}
            component={ProductDesc}
          />
          <PrivateRoute
            exact
            path={"/view_categories/:id"}
            component={ViewCategory}
          />
          <PrivateRoute path="/dashboard" exact component={Dashboard} />
          <PrivateRoute
            exact
            path={"/user_profile/:id"}
            component={ExternalUserProfile}
          />
        </Suspense>
        {/* </Switch> */}
      </main>
      {pathname === "/verify_email" ||
      pathname === "/" ||
      pathname === "/forget_password_success_response" ||
      pathname.includes("/verify_email_success") ? (
        ""
      ) : (
        <Footer />
      )}
    </div>
  );
}

export default App;
