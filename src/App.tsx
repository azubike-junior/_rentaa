import React from "react";
import "./App.css";
// import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
// import Overview from "./pages/Overview";
// import Customers from "./pages/Customers";
// import CustomerProfile from "./pages/CustomerProfile/index";
// import Defaulters from "./pages/Defaulters";
// import Fulfillment from "./pages/Fulfilment";
// import FulfillmentDetails from "./pages/FulfillmentDetails/index";
// import Reconciliation from "./pages/Reconciliation";

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
import ProfilePage from "./pages/ProfilePage";
import ExternalProfilePage from "./pages/ExternalProfilePage";

function App() {
  const { pathname } = useLocation();

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
        <Routes>
          <Route path={"/"} element={<LandingPage />} />
          <Route path={"/verify_email"} element={<VerifyEmail />} />
          {/* <Route exact path={"/our_story"} component={OurStory} /> */}
          <Route
            path={"/forget_password_success_response"}
            element={<VerifyPasswordSuccess />}
          />
          <Route path={"/contact_us"} element={<Contact />} />
          <Route path={"/our_story"} element={<OurStory />} />
          <Route
            path={"/verify_email_success/:token"}
            element={<VerifyEmailSuccess />}
          />
          <Route
            path={"/reset_password_success/:token"}
            element={<ResetPassword />}
          />
          <Route path={"/sign_up"} element={<SignUp />} />
          <Route path={"/forget_password"} element={<ForgetPassword />} />
          <Route path={"/login"} element={<Login />} />

          <Route
            path={"/profile"}
            element={
              <PrivateRoute>
                <ProfilePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/bookmark"
            element={
              <PrivateRoute>
                <Bookmark />
              </PrivateRoute>
            }
          />
          <Route
            path={"/post_product"}
            element={
              <PrivateRoute>
                <PostProduct />
              </PrivateRoute>
            }
          />
          <Route
            path={"/edit_gadget/:id"}
            element={
              <PrivateRoute>
                <EditGadget />
              </PrivateRoute>
            }
          />
          {/* <PrivateRoute exact path={"/profile"} component={Profile} /> */}
          <Route
            path={"/product_description/:id"}
            element={
              <PrivateRoute>
                <ProductDesc />
              </PrivateRoute>
            }
          />
          <Route
            path={"/more_gadget_description/:id"}
            element={
              <PrivateRoute>
                <ProductDesc />
              </PrivateRoute>
            }
          />
          <Route
            path={"/view_categories/:id"}
            element={
              <PrivateRoute>
                <ViewCategory />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          {/* <PrivateRoute
            path={"/user_profile/:id"}
            component={ExternalUserProfile}
          /> */}
          <Route
            path={"/user_profile/:id"}
            element={
              <PrivateRoute>
                <ExternalProfilePage />
              </PrivateRoute>
            }
          />

          {/* </Switch> */}
        </Routes>
      </main>
      {pathname === "/verify_email" ||
      pathname === "/" ||
      pathname === "/forget_password_success_response" ||
      pathname.includes("/verify_email_success") ? (
        ""
      ) : (
        // <Footer />
        <LandingPageFooter />
      )}
    </div>
  );
}

export default App;
