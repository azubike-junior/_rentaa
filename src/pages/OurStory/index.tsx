import React, { useState, useEffect } from "react";
import about1 from "../../images/about-slide1.svg";
import about2 from "../../images/about-slide2.png";
import watch from "../../images/watch.png";
import section2 from "../../images/Section 2.png";
const OurStory: React.FC = () => {
  const [show, setshow] = useState(true);

  const changeBg = () => {
    if (window.innerWidth <= 600) {
      setshow(false);
    } else {
      setshow(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", changeBg);
    return () => window.removeEventListener("resize", changeBg);
  }, [show]);

  return (
    <>
      <section className="bg-about-img bg-cover mx-auto w-92 h-60 md:h-80 bg-no-repeat bg-center text-white flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold md:text-6xl p-4 ">Our Mission</h1>

        <p className=" md:text-xl p-4 pt-0 text-center text-xs leading-5 font-normal font-dm-sans">
          Quality peer-to-peer gadget lending services <br />
          for anyone, from anywhere.
        </p>
      </section>

      <section className="mt-36 text-center">
        <h1 className="text-2xl font-bold mb-8">Our Origins</h1>

        <p className="p-4 font-normal text-xs leading-relaxed">
          We started in September 2021 with one goal in mind; to disrupt the p2p
          gadget lending space in Nigeria. Our work since then has been a
          testament to that fact.
        </p>
        <p className="p-4 font-normal text-xs leading-relaxed">
          Having identified a problem of e-waste management in Nigeria as well
          as rising costs of gadgets, we decided to solve that problem by
          creating a platform with our users at the centre of it. Our sole focus
          is in how best we can serve this ripe market in Nigeria and make a
          world of difference in the process.
        </p>
      </section>

      <section className="mt-20 ">
        {show ? (
          <img src={section2} alt="" />
        ) : (
          <div className=" flex justify-around overflow-hidden">
            <img src={about1} alt="" className="flex-1" />
            <img src={about2} alt="" className=" " />
          </div>
        )}
      </section>
      <section className="mt-28 text-center font-normal text-xs bg-secondary text-white p-4 pt-6 md:flex md:justify-between gap-6 md:items-center md:px-10 md:py-14">
        <div className="p-2 md:w-4/5">
          <img src={watch} alt="" className="md: w-550" />
        </div>
        <div className="md:text-left md:w-4/5">
          <h1 className="text-xl my-4 font-bold mb-6 md:text-6xl font-dossis">
            What We Offer
          </h1>
          <div className="flex flex-col gap-4 text-xs font-normal font-dm-sans pb-16 md:text-xl md:font-normal">
            <p>Access a wide range of available gadgets for rent. </p>
            <p className="pb-4">
              With filter based searches as well as powerful search
              recommendations custom made for you
            </p>

            <p>
              List gadgets at your own price and find prospective lenders fast.{" "}
            </p>
            <p className="pb-4">
              With zero lending costs, insurance cover and an amazing user
              experience
            </p>

            <p>Cost effective, easy and fast rental services on any gadget</p>
            <p>Rent to anyone, from anyone, anytime, anywhere</p>
          </div>
        </div>
      </section>
      <section className="mt-28 px-3 text-center md:text-left md:flex w-screen md:p-20 md:gap-4">
        <div className="md: justify-self-center self-center">
          <h1 className="font-semibold text-2xl font-dm-sans p-4 pb-3 md:text-5xl">
            Stay in the <span className="text-secondary">Loop</span>
          </h1>
          <p className="text-xs font-normal leading-relaxed p-4 md:text-base">
            Get information and updates on our future release product updates
            and learning resources from the Rentaa team.
          </p>
        </div>
        <form className="flex flex-col items-center p-4 text-sm text-left w-11/12">
          <label
            htmlFor="firstName"
            className="font-dm-sans text-xs font-normal self-start  mb-1"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            className="border border-green px-3 py-2 mb-5 rounded-md md:w-full"
          />

          <label
            htmlFor="lastName"
            className="font-dm-sans text-xs font-normal  self-start mb-1"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            className="border border-ash px-3 py-2 mb-5 rounded-md md:w-full"
          />

          <label
            htmlFor="email"
            className="font-dm-sans text-xs font-normal  self-start mb-1"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="border border-ash px-3 py-2 mb-20 rounded-md md:w-full"
          />

          <button
            type="submit"
            className="bg-secondary p-4 md:px-6  text-white rounded-md md:w-full"
          >
            Subscribe to Our Newsletter
          </button>
        </form>
      </section>
    </>
  );
};

export default OurStory;
