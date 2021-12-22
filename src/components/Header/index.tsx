import React from "react";
import rentaa from "../../images/rentaa_white.svg";
import Button from "../Button";
import { Link } from "react-router-dom";
import searchIcon from "../../images/searchIcon.svg";
import notifyIcon from "../../images/notification.svg";
import bookmark from "../../images/bookmark.svg";
import avatar from "../../images/avatar.svg";

export default function Header() {
  const user = true;
  return (
    <div className="bg-white shadow-lg h-24 md:h-32 border-b-2 w-full sticky top-0">
      <div className="px-6 flex flex-row justify-between items-center mx-auto md:max-w-7xl pt-8 md:pt-8">
        <img src={rentaa} className=" w-20 md:w-32" alt="" />
        {!user ? (
          <div className="hidden md:flex space-x-36 font-dm-sans text-base text-black">
            <span>
              <Link to="/">Home</Link>{" "}
            </span>
            <span>About</span>
          </div>
        ) : (
          <div className=" hidden bg-primary md:w-96 lg:w-700 rounded-full py-4 md:flex px-4">
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
          <Link to={"/login"}>
            <Button
              type="button"
              child="Login"
              className="text-secondary border border-secondary rounded px-6 md:px-9 py-2"
            />
          </Link>
        ) : (
          <div className="flex space-x-4 md:space-x-7 lg::space-x-10">
            <img className="w-6 md:w-8" src={notifyIcon} alt="notify" />
            <Link to="/bookmark">
              <img className="w-6 md:w-8" src={bookmark} alt="notify" />
            </Link>
            <Link to="/profile">
              <img className="w-6 md:w-8" src={avatar} alt="notify" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
