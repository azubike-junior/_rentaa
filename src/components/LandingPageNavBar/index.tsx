import React from "react";
import { Link } from "react-router-dom";
import RentaaLogo from "../../images/rentaa_white.svg";
import star from "../../images/star.svg";
import menu from "../../images/menu.svg";
import { toggleSidebar } from "../../services/Mutations/Modal";
import { useDispatch } from 'react-redux';

const LandingPageNavBar: React.FC = () => {
  const dispatch = useDispatch()
  return (
    <>
      <nav className="hidden md:block container mx-auto px-6  max-w-7xl">
        <div className="flex flex-row justify-between items-center mx-2">
          <div className="flex flex-row items-center">
            <Link to="/">
              <figure className="mr-24">
                <img className="sm:h-6 md:h-9" src={RentaaLogo} />
              </figure>
            </Link>
            <ul className="flex flex-row">
              <Link to="/">
                <li className="transition-all duration-300 lg:text-lg md:text-xs text-black mr-12 hover:text-black cursor-pointer">
                  Home
                </li>
              </Link>
              <Link to="/our_story">
                <li className="transition-all duration-300 lg:text-lg md:text-xs text-bgAsh mr-12 hover:text-black cursor-pointer">
                  Our Story
                </li>
              </Link>
              <li className="transition-all duration-300 lg:text-lg md:text-xs text-bgAsh mr-12 hover:text-black cursor-pointer">
                Contact Us
              </li>
              <li className="transition-all duration-300 lg:text-lg md:text-xs text-bgAsh mr-12 hover:text-black cursor-pointer">
                FAQs
              </li>
            </ul>
          </div>
          <Link to="/sign_up">
            <button className="relative lg:px-7 md:px-5 lg:py-4 md:py-4 md:text-xs lg:text-lg rounded-md bg-secondary text-white text-lg">
              Join Private Beta
              <img className="absolute -top-5 -left-5" src={star} />
            </button>
          </Link>
        </div>
      </nav>
      <nav className="md:hidden w-full mx-auto mt-3">
        <div className="mx-7 flex items-center justify-between">
          <Link to="/">
            <figure>
              <img className="h-6 cursor-pointer" src={RentaaLogo} />
            </figure>
          </Link>

          {/* <button className="relative px-5 py-3 text-xs rounded-md bg-secondary text-white">
              Join Private Beta
              <img className="absolute -top-3 -left-2 w-5 h-5" src={star} />
            </button> */}
          <img
            src={menu}
            alt=""
            className="w-7 cursor-pointer"
            onClick={() => {
              dispatch(toggleSidebar());
            }}
          />
        </div>
        {/* <ul className="flex flex-row mx-auto xs:w-72 w-80 xxs:w-56 sm:w-400 justify-between mt-5">
          <li className="transition-all duration-300 text-xs text-bgAsh hover:text-black cursor-pointer">
            Home
          </li>
          <li className="transition-all duration-300 text-xs text-bgAsh hover:text-black cursor-pointer">
            Our Story
          </li>
          <li className="transition-all duration-300 text-xs text-bgAsh hover:text-black cursor-pointer">
            Contact Us
          </li>
          <li className="transition-all duration-300 text-xs text-bgAsh hover:text-black cursor-pointer">
            FAQs
          </li>
        </ul> */}
      </nav>
    </>
  );
};
export default LandingPageNavBar;
