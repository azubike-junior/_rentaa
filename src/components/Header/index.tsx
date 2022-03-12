import React, { useEffect, useState } from "react";
import rentaa from "../../images/rentaa_white.svg";
import Button from "../Button";
import { Link, useParams, useLocation, useHistory } from "react-router-dom";
import searchIcon from "../../images/searchIcon.svg";
import notifyIcon from "../../images/notification.svg";
import bookmark from "../../images/bookmark.svg";
import avatar from "../../images/avatar.jpg";
import { RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { getProfileAvatar } from "../../services/Queries/getProfileAvatar";
import { getUserById } from "../../services/Queries/getUser";

export default function Header() {
  const location = useLocation();
  const [image, setImage] = useState("");
  const pathName = location.pathname;
  const dispatch = useDispatch();
  const history = useHistory();

  let avatarId: any;

  const user = localStorage.getItem("accessToken");
  avatarId = localStorage.getItem("avatarId");

  useEffect(() => {
    if (user) {
      dispatch(getUserById());
      console.log(">>>>>>>>>.user oo", avatarId);

      dispatch(getProfileAvatar({ avatarId, setImage }));
    }
  }, [user, avatarId]);

  return (
    <div className="bg-white shadow-lg h-24 md:h-32 border-b-2 w-full sticky top-0 z-30">
      <div className="px-8 flex flex-row justify-between items-center mx-auto md:max-w-7xl pt-2 md:pt-5">
        <Link to={user ? "/dashboard" : "/"}>
          <img src={rentaa} className="mt-6 md:mt-3 w-20 md:w-32" alt="" />
        </Link>
        {!user ? (
          <div className="hidden md:flex pt-4 space-x-36 font-dm-sans text-base text-black">
            <span>
              <Link to="/">Home</Link>{" "}
            </span>
            <span>About</span>
          </div>
        ) : (
          <div className=" hidden bg-primary md:w-96 lg:w-500 xl:w-700 rounded-full mt-2 py-4 md:flex px-4">
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
              className="text-secondary border border-secondary rounded px-6 md:px-9 py-3 mt-4"
            />
          </Link>
        ) : (
          <div className="flex space-x-4 md:space-x-7 xl:space-x-10 pt-6 md:pt-2">
            <img
              className="w-6  md:w-8 lg:w-10"
              src={notifyIcon}
              alt="notify"
            />
            <Link to="/bookmark">
              <img
                className="w-6  md:w-8 lg:w-10"
                src={bookmark}
                alt="notify"
              />
            </Link>
            <span
              onClick={() => {
                history.push("/profile");
                window.location.reload();
              }}
              className="cursor-pointer"
            >
              <img
                className="w-6 h-6 md:w-8 md:h-8 lg:h-10 lg:w-10 border rounded-full"
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
