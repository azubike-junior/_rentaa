/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import BottomLeft from "../../images/bottomLeft.png";
import BottomRight from "../../images/bottomRight.png";
import iphone from "../../images/iphone.svg";
import Button from "../Button";
import line from "../../images/line.svg"

const AccessPossibilities: React.FC = () => {
  const navigate = useNavigate()
  return (
    <section className="mt-6 lg:flex lg:items-center flex-row-reverse lg:justify-between mx-auto px-8 xl:h-600 max-w-7xl">
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className="relative xxs:hidden xs:hidden sm:hidden md:hidden lg:block w-90 mx-auto xl:w-500 xl:h-600 lg:m-0 md:w-96 md:h-96"
      >
        <img
          className="hidden md:block absolute w-400 mt-24 z-10"
          src={iphone}
        />
        <img
          className="hidden md:block absolute xxs:w-18 xs:w-18 w-40 z-0 lg:-bottom-96 xl:-bottom-96 -left-28 lg:h-[50px] xl:h-60"
          src={BottomLeft}
        />
        <img
          className="hidden md:block absolute xxs:w-24 xs:w-24 w-32 h-[250px] -bottom-1 -right-3 lg:hidden xl:block"
          src={BottomRight}
        />
        {/* <img className='absolute xxs:w-24 xs:w-24 w-32 -top-3 -left-2' src={TopLeft} /> */}
      </div>

      {/* for extra-small screen size (remains hidden in other screens) */}
      <div className="xxs:block hidden text-center text-base font-dosis">
        <p data-aos="fade-right" data-aos-duration="2000" className="font-dosis">
          Access a <span className="text-secondary">world</span> of creative{" "}
          <span className="text-secondary">possibilities</span>
        </p>
        <p className="xss:block xs:hidden text-center xxs:text-sm leading-6 w-150 mx-auto font-normal mt-4">
          We’re building <span className="font-bold">faster</span> and{" "}
          <span className="font-bold">stress-free</span> ways to rent gadgets
          from, and to anyone without any hassle. Giving you complete{" "}
          <span className="font-bold">access</span> to work better, and earn
          better.
        </p>
      </div>

      <article className="mt-12">
        <p
          data-aos="fade-right"
          data-aos-duration="2000"
          className="xs:w-64 xxs:hidden xs:text-2xl xxs:text-2xl text-3xl md:text-4xl md:w-90 w-72 text-center lg:text-5xl lg:w-500 lg:text-left mx-auto lg:mx-0 font-medium font-dosis"
        >
          Access a <span className="text-secondary">world</span> of creative{" "}
          <span className="text-secondary">possibilities</span>
        </p>
        <p className="xs:w-80 xxs:hidden xs:text-xs xxs:text-xs leading-6 text-sm md:text-base lg:text-lg text-center lg:text-left w-400 md:w-500 xl:w-600 mx-auto lg:mx-0  font-normal mt-4 lg:mt-10 lg:tracking-wider lg:leading-9">
          We’re building <span className="font-bold">faster</span> and{" "}
          <span className="font-bold">stress-free</span> ways to rent gadgets
          from, and to anyone without any hassle. Giving you complete{" "}
          <span className="font-bold">access</span> to work better, and earn
          better.
        </p>
        <div className="block md:flex md:justify-center md:items-center lg:hidden lg:justify-start mt-6  lg:mt-16 text-center lg:text-left">
          <div className="pb-4 md:pb-0 ">
            <Link to="/our_story">
              <button
                data-aos="zoom-in"
                className="xs:text-xs xxs:text-xs text-sm md:text-base lg:text-lg py-3 lg:py-4 px-5 lg:px-7 bg-secondary text-white rounded-md md:mr-5"
              >
                Our story
              </button>
            </Link>
          </div>

          <div className="">
            <Link to="/sign_up">
              <button
                data-aos="zoom-in"
                className="xs:text-xs xxs:text-xs text-sm md:text-base lg:text-lg py-3 lg:py-4.5 px-5 lg:px-7 text-secondary border-2 rounded-md border-secondary"
              >
                Join Private Beta
              </button>
            </Link>
          </div>
         
        </div>
        <div className="hidden lg:block  font-dm-sans">
          <div className="hidden w-full bg-white h-18 py-2 lg:flex items-center px-3 rounded-2xl mt-4">
          <input type="text" className="w-full outline-none text-lg px-2 pr-3" /> <Button child="Search" className=" bg-secondary text-white w-28 py-2.5 rounded-lg" type="button" />
          </div>
          <div className="pl-2 pt-0 flex -mt-6">
            <img src={line} alt="line"  />
              <div className="flex items-center justify-center space-x-6">
              <p className="text-black pt-14 pl-2">Have a gadget for rent?</p>
              <Link to="/post_product">
               <Button className="border-secondary border-[1.5px] p-4 px-8 rounded-2xl mt-14 text-secondary" child="Upload Gadget" type="button"/>
              </Link>
            </div>
          </div>
        </div>
      </article>
      <figure
        data-aos="fade-up"
        data-aos-duration="2000"
        className="lg:hidden xxs:w-48 xs:mx-auto xs:w-72 xs:h-72 w-90 mx-auto xl:w-500 xl:h-600 lg:m-0 md:w-96 md:h-96"
      >
        <img className="w-400 mt-10 md:mt-24 z-10" src={iphone} />
      </figure>
    </section>
  );
};

export default AccessPossibilities;
