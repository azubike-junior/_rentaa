import React from "react";
import rentaa from "../../images/logo.svg";
import Button from "../Button";

export default function Header() {
  return (
    <div className="bg-secondary h-24 md:h-28 w-full">
      <div className="px-6 flex flex-row justify-between items-center mx-auto md:max-w-7xl pt-4 md:pt-6">
        <img src={rentaa} className=" w-36 md:w-40" alt="" />
        <div className="hidden md:flex space-x-36 font-dm-sans text-base text-white">
          <span>Home</span>
          <span>About</span>
        </div>
        <Button
          type="button"
          child="Login"
          className="text-white border rounded px-6 md:px-9 py-2"
        />
      </div>
    </div>
  );
}
