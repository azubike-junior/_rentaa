import React from "react";
import verifyImage from "../../images/verifyImage.png";
import logo from "../../images/rentaa_w.svg";
import { Link } from "react-router-dom";

export default function VerifyPasswordSuccess() {
  return (
    <div className="bg-secondary font-dm-sans">
      <div className="flex flex-col items-center 4">
        <div className="mb-8">
          <Link to="/">
            <img
              src={logo}
              className="h-24 w-24 md:h-40 md:w-40"
              alt="rentaa logo"
            />
          </Link>
        </div>

        <div className="flex flex-col text-left container bg-white md:pb-20 md:w-900 text-sm rounded-lg">
          <img
            src={verifyImage}
            className=" h-48 md:h-64 container round-t-lg md:rounded-none"
            alt="verifyImage"
          />

          <h1 className="text-center mb-6 text-xl md:text-3xl pt-32 uppercase bolder">
            Password Reset Request
          </h1>
          <p className="text-center md:text-xl ">
            A password reset link has been sent to your email.
          </p>
          <p className="pb-4 text-center md:text-xl ">
            You can also check your spam, if you dont see the email
          </p>

          <div className=" bg-bgAsh my-16 w-56  md:w-400 h-0.5 text-center items-center justify-center mx-auto "></div>

          <p className="text-center md:text-xl lowercase">
            Didn't get your email?
          </p>
          <p className="pb-8 text-center md:text-xl lowercase text-secondary ">
            Click here to resend
          </p>
        </div>
      </div>
    </div>
  );
}
