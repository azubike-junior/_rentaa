import React from "react";
import { Link } from "react-router-dom";
import { HookInput } from "../../components/BasicInputField";
import Button from "../../components/Button";
import FormTitle from "./../../components/FormTitle/index";

export default function SignUp() {
  return (
    <div className="w-full pt-7 py-10 my-12 lg:mt-24 flex items-center justify-center ">
      <div className="flex flex-col items-start ">
        <FormTitle
          title="Let's Create your Account"
          instruction="Welcome to the creative gateway"
        />

        <div className="px-3 pt-12 w-full">
          <HookInput
            label="First Name"
            name="firstName"
            type="text"
            className="w-full"
            show
          />
          <HookInput
            label="Last Name"
            name="lastName"
            type="text"
            className=" lg:w-600 pt-10"
            show
          />
          <HookInput
            label="Email Address"
            name="lastName"
            type="text"
            className=" lg:w-600 pt-10"
          />
          <HookInput
            label="Phone Number"
            name="lastName"
            type="text"
            className=" lg:w-600 pt-10"
          />
          <HookInput
            label="Password"
            name="lastName"
            type="text"
            className=" lg:w-600 pt-10"
          />
          <HookInput
            label="Confirm Password"
            name="lastName"
            type="text"
            className=" lg:w-600 pt-10"
          />
          <span className="hidden md:flex items-center justify-center font-dm-sans pt-8 text-xs">
            By clicking <span className="text-secondary px-1">"Sign up" </span>{" "}
            you agree to Rentaa's{" "}
            <Link to="#" className="px-1 text-secondary">
              Private Policy
            </Link>{" "}
            and{" "}
            <Link to="#" className="px-1 text-secondary">
              Terms and Conditions
            </Link>
          </span>
          <p className="text-xs md:hidden text-center w-72 pt-6">
            By clicking sign up you agree to Rentaa's Private Policy and Terms
            and Conditions
          </p>

          <Link to="/login">
            <Button
              child="Login"
              type="submit"
              className="w-full bg-secondary md:text-lg mt-10 py-3 md:py-8 font-dm-sans text-white rounded"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
