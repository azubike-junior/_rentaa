import React from "react";
import rentaa from "../../images/rentaa_white.svg";
import Button from "../Button";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-white shadow-lg h-24 md:h-28 border-b-2 w-full">
      <div className="px-6 flex flex-row justify-between items-center mx-auto md:max-w-7xl pt-6 md:pt-8">
        <img src={rentaa} className=" w-20 md:w-32" alt="" />
        <div className="hidden md:flex space-x-36 font-dm-sans text-base text-black">
          <span>
            <Link to="/">Home</Link>{" "}
          </span>
          <span>About</span>
        </div>

        <Link to={"/login"}>
          <Button
            type="button"
            child="Login"
            className="text-secondary border border-secondary rounded px-6 md:px-9 py-2"
          />
        </Link>
      </div>
    </div>
  );
}
