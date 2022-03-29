import React from "react";
import rentaa from "../../images/rentaa_white.svg";
import Button from "../Button";
import { Link, useParams, useLocation } from "react-router-dom";
import searchIcon from "../../images/searchIcon.svg";
import notifyIcon from "../../images/notification.svg";
import bookmark from "../../images/bookmark.svg";
import avatar from "../../images/avatar.svg";

export default function Header() {
  const user = false;
  const location = useLocation();
  const pathName = location.pathname;

  return (
    <div
      className={
        pathName === "/"
          ? "bg-white sticky top-0 "
          : "bg-white shadow-lg sticky top-0"
      }
    >
      <div className="px-4 flex flex-row justify-between items-center mx-auto md:max-w-7xl py-3 md:py-4">
        <Link to={user ? "/dashboard" : "/"}>
          <img src={rentaa} className=" my-2 w-20 md:w-32" alt="" />
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
              child={pathName === "/login" ? "Create An Account" : "Login"}
              className="text-secondary border border-secondary rounded px-6 md:px-9 py-2 my-2"
            />
          </Link>
        ) : (
          <div className="flex space-x-4 md:space-x-7 xl:space-x-10">
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
            <Link to="/profile">
              <img className="w-6 md:w-8 lg:w-10" src={avatar} alt="notify" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
