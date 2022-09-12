import React, { useEffect, useState } from "react";
import rentaa from "../../images/rentaa_white.svg";
import Button from "../Button";
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import searchIcon from "../../images/searchIcon.svg";
import notifyIcon from "../../images/notification.svg";
import bookmark from "../../images/bookmark.svg";
import avatar from "../../images/avatar.jpg";
import { RootState, useAppDispatch } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { getProfileAvatar } from "../../services/Queries/getProfileAvatar";
import { getUserById } from "../../services/Queries/getUser";
import {
  closeNotification,
  openNotification,
} from "../../services/Mutations/Modal";
// import { motion } from "framer-motion/dist/framer-motion";
import Notification from "./../Notification/index";
import { getGadgets } from "./../../services/Queries/getGadgets";
import { motion } from "framer-motion";

export default function Header() {
  const location = useLocation();
  const [image, setImage] = useState("");
  const pathName = location.pathname;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [isMouse, toggleMouse] = useState(false);
  const toggleMouseMenu = () => {
    toggleMouse(!isMouse);
  };

  let avatarId: any;

  const user = localStorage.getItem("accessToken");
  avatarId = localStorage.getItem("avatarId");

  /**
   * same approach from the ProfileHeader Component is used to set the avatar image
   * in the header
   */

  useEffect(() => {
    dispatch(getGadgets());
  }, []);

  useEffect(() => {
    // if (user) {
    //   useAppuseAppDispatch(getUserById());
    //   console.log(">>>>>>>>>.user oo", avatarId);

    dispatch(getProfileAvatar({ avatarId, setImage }));
  }, [user, avatarId]);

  return (
    <div className="bg-white shadow-sm h-24 border-b-2 w-full sticky top-0 z-30">
      <div className="px-8 flex flex-row justify-between items-center mx-auto md:max-w-7xl pt-2 md:pt-5">
        <Link to={user ? "/dashboard" : "/"}>
          <img src={rentaa} className="mt-6 md:mt-0 w-20 md:w-24" alt="" />
        </Link>
        {!user ? (
          <div className="hidden md:flex pt-0 space-x-36 font-dm-sans text-base text-black">
            <span>
              <Link to="/">Home</Link>{" "}
            </span>
            <span>
              <Link to="/our_story">Our Story</Link>{" "}
            </span>
          </div>
        ) : (
          <div className=" hidden bg-primary md:w-96 lg:w-500 xl:w-700 rounded-full py-2 md:flex px-4">
            <img
              src={searchIcon}
              className="w-10 h-6 mt-2 pl-3 flex items-center justify-center"
              alt="search"
            />
            <input
              className="px-6 py-2 bg-transparent flex-1 outline-none"
              type="text"
              placeholder="Search for Gadgets and  Locations around you"
            />
          </div>
        )}
        {!user ? (
          <Link to={pathName === "/login" ? "/sign_up" : "/login"}>
            <Button
              type="button"
              child={pathName === "/login" ? "Sign Up" : "Login"}
              className="text-secondary text-sm md:text-base border border-secondary rounded px-5 py-2 md:px-9 md:py-2 mt-5 md:mt-3"
            />
          </Link>
        ) : (
          <div className="flex space-x-4 md:space-x-7 xl:space-x-10 pt-6 md:pt-2">
            <motion.div
              // className="menu-item"
              onClick={() => toggleMouseMenu()}
            >
              <Link to="#">
                <img
                  className="w-6 lg:w-8 pt-1 cursor-pointer"
                  src={notifyIcon}
                  alt="notify"
                />
              </Link>

              <Notification isMouse={isMouse} />
            </motion.div>

            {/* </motion.div> */}

            <Link to="/bookmark">
              <img className="w-6 lg:w-8 pt-1" src={bookmark} alt="notify" />
            </Link>
            <span
              onClick={() => {
                navigate("/profile");
                // window.location.reload();
              }}
              className="cursor-pointer"
            >
              <img
                className="w-6 mt-1 h-6  md:h-8 lg:h-10 lg:w-10 border rounded-full"
                src={!image ? avatar : image}
                alt="notify"
              />
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
