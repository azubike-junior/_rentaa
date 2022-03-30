import React from "react";
import rentaa from "../../images/rentaa_w.svg";
import instagram from "../../images/instagram.svg";
import facebook from "../../images/facebook.svg";
import twitter from "../../images/twitter.svg";
import { Link, useParams, useLocation } from "react-router-dom";


export default function Footer() {
  const location = useLocation();
  const pathName = location.pathname;

  return (
    <div className={pathName =="/" ? "hidden":" w-full text-white bg-darkAsh py-4 md:py-16 flex font-poppins justify-center items-center"}>
  <div className="max-w-7xl py-9 block md:grid grid-cols-2 md:gap-0 lg:gap-10 md:px-14 lg:px-10 xl:gap-20">
        <div className="pb-10">
          <img
            src={rentaa}
            alt="rentaa"
            className="pb-4 md:pb-6 w-24 md:w-32 lg:w-36 "
          />
          <div className="flex space-x-4 md:space-x-7">
            <img src={instagram} alt="" className="w-4 md:w-6" />
            <img src={facebook} alt="" className="w-2 md:w-4" />
            <img src={twitter} alt="" className="w-4 md:w-6" />
          </div>
        </div>

        <div className="space-x-5 md:space-y-0 flex justify-between items-center md:space-x-14 lg:space-x-20 font-poppins xl:space-x-24 ">
          <div className="space-y-3 text-xs lg:text-base ">
            <p className=" font-black">Company</p>
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Careers</p>
          </div>
          <div className="space-y-3 text-xs lg:text-base">
            <p className="font-black">Legal</p>
            <p>Terms and Conditions</p>
            <p>Privacy Policy</p>
            <p>Cookies Policy</p>
          </div>
          <div className="space-y-3 text-xs lg:text-base">
            <p className=" font-black">Resources</p>
            <p>Blog</p>
            <p>Media</p>
            <p>FAQs</p>
          </div>
        </div>
      </div>
    </div>
  );
}
