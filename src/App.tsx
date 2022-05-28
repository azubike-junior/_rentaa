import React, { Suspense, lazy, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
  useLocation,
  useRouteMatch,
} from "react-router-dom";
// import Dashboard from "./pages/Dashboard";
// import VerifyEmailSuccess from "./pages/VerifyEmailSuccess";
import { HookInput } from "./components/BasicInputField";
import { RootState } from "./store/store";
import { useSelector } from "react-redux";
import Bookmark from "./pages/Bookmark";
import Button from "./components/Button/index";
import Contact from "./pages/ContactUs";
import Dashboard from "./pages/Dashboard";
import EditGadget from "./pages/EditGadget/index";
import ExternalUserProfile from "./pages/ExternalUserProfile/index";
import Footer from "./components/Footer";
import ForgetPassword from "./pages/ForgetPassword";
import Header from "./components/Header";
import IdleTimer from "./utils/idleTimer";
import LandingPage from "./pages/LandingPage";
import LandingPageFooter from "./components/LandingPageFooter";
import Loader from "./components/Loader";
import Login from "./pages/Login";
import Notification from "./components/Notification";
import OurStory from "./pages/OurStory";
import PostProduct from "./pages/PostProduct";
import PrivateRoute from "./components/PrivateRoute";
import ProductDesc from "./pages/ProductDesc/index";
import Profile from "./pages/Profile";
import ResetPassword from "./pages/ResetPassword";
import SignUp from "./pages/Register";
import VerifyEmail from "./pages/VerifyEmail/index";
import VerifyEmailSuccess from "./pages/VerifyEmailSuccess/index";
import VerifyPasswordSuccess from "./components/VerifyPasswordSuccess";
import ViewCategory from "./pages/ViewCategory";

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
      pathname === "/our_story" ||
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
          <Route exact path={"/our_story"} component={OurStory} />
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
        // <Footer />
        <LandingPageFooter/>
      )}
    </div>
  );
}

export default App;
