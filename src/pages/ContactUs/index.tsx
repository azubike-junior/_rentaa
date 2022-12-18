import React from "react";
import messageIcon from "../../images/messageIcon.svg";
import instagram from "../../images/instagramIcon.svg";
import twitter from "../../images/twitter.svg";
import { HookInput } from "../../components/BasicInputField";
import Button from "../../components/Button";
import LandingPageNavBar from "./../../components/LandingPageNavBar/index";
import Sidebar from "../../components/Sidebar";

export default function Contact() {
  return (
    <div className="pt-2">
      <LandingPageNavBar />
      <Sidebar/>
      <div className=" bg-secondary h-full xl:h-full 2xl:h-screen">
        <div className="max-w-7xl h-full mx-auto px-8 py-24 block md:flex justify-between md:space-x-16 lg:space-x-32 xl:space-x-56">
          <div className="mt-0 md:mt-16 text-white font-dm-sans mb-10 md:mb-0">
            <h1 className="text-2xl lg:text-3xl pb-3 text-center md:text-left ">
              Contact Us
            </h1>
            <div className="text-center md:text-left">
              <span className="text-sm lg:text-base pb-1 ">
                Send us a message and we will get back to you within 24 hours{" "}
              </span>
            </div>

            <p className=""></p>

            <div className="hidden pt-24 md:block space-y-14 text-sm lg:text-lg">
              <div className="flex items-center">
                <img src={messageIcon} className="pr-3" alt="" />
                <p>RentaaXYZ@gmail.com</p>
              </div>
              <div className="flex items-center ">
                <img src={instagram} className="pr-3" alt="" />
                <p>@Rentaa_ng</p>
              </div>
              <div className="flex items-center">
                <img src={twitter} className="pr-3" alt="" />
                <p>@Rentaa_ng</p>
              </div>
            </div>
          </div>

          <div className="bg-white w-full px-10 lg:px-14 rounded-xl py-4">
            <HookInput
              label="Full Name"
              className="lg:w-full pt-10"
              name="fullName"
            />
            <HookInput
              label="Email Address"
              className="lg:w-full pt-10"
              name="email"
            />

            <HookInput
              label="Description"
              className="lg:w-full pt-12"
              textAreaClass="md:h-44  h-36"
              name="email"
              textArea
            />

            <div className="grid place-content-end">
              <Button
                child="Submit"
                type="submit"
                className="text-white bg-secondary px-14 py-4 my-5 text-sm  lg:px-24 lg:py-6 lg:my-10 lg:text-lg"
              />
            </div>
          </div>

          <div className="md:hidden flex justify-center items-center font-dm-sans mx-auto text-white pt-20  text-sm lg:text-lg">
            <div className="space-y-10">
              <div className="flex items-center">
                <img src={messageIcon} className="pr-3" alt="" />
                <p>RentaaXYZ@gmail.com</p>
              </div>
              <div className="flex items-center ">
                <img src={instagram} className="pr-3" alt="" />
                <p>@Rentaa_ng</p>
              </div>
              <div className="flex items-center">
                <img src={twitter} className="pr-3" alt="" />
                <p>@Rentaa_ng</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
