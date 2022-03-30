import React from "react";
import Button from "../../components/Button";
import Home from "../../images/home.png";
import formImg from "../../images/Frame 19.svg";
import section2 from "../../images/Section 2.svg";
import speaker from "../../images/speaker.png";
import HomeInput from "../../components/Input/Index";
import HompageDiv from "../../components/HomePageDiv";

export default function Homepage() {
  return (
    <>
      <div className="container-sm md:w-screen md:my-4  mx-auto sm:px-4 md:px-16 flex flex-col md:flex-row-reverse sm:gap-y-10 md:gap-y-0 md:h-600  md:justify-around ">
        <div className="">
          <img src={Home} alt="" className="md:w-500 overflow-x-hidden" />
        </div>
        <div className="sm:text-center md:text-left flex flex-col sm:gap-y-4 items-start justify-center md:w-1/2 ">
          <h1 className="sm:text-2xl md:text-5xl py-3 px-7">
            {" "}
            Access a world of <br /> creative possibilities
          </h1>

          <p className="sm:text-xs md:text-xl text-homepage md:w-5/5 hover md:ml-6">
            We’re building faster and stress- free ways to rent gadgets from,
            and to anyone without any hassle. Giving you complete access to work
            better, and earn better.
          </p>

          <div className="flex gap-x-3 sm:justify-center md:justify-start py-3 pb-5 px-6">
            <Button
              child="Our story"
              type="button"
              className=" bg-secondary text-white p-3  sm:text-xs md:text-lg "
            />
            <Button
              child="Join Private Beta"
              type="button"
              className="outline-secondary text-secondary p-3  text-xs md:text-lg"
            />
          </div>
        </div>
      </div>

      <section className="">
        <img src={formImg} alt="" className="md:hidden" />
        <img src={section2} alt="" className="sm:hidden lg:block" />
      </section>
      <section>
        <h1 className="text-center md:text-left md:pl-5 text-2xl my-8">
          Optimized for YOU
        </h1>
        <HompageDiv
          text="Access a wide range of available gadgets for rent. 
With filter based searches as well as powerful search recommendations custom made for you"
          number="01"
        />
        <HompageDiv
          text="List gadgets at your own price and find prospective
          lenders fast. With zero lending cost, insurance cover and an amazing user experience"
          number="02"
        />
        <HompageDiv
          text="Cost effective, easy and fast rental services on any gadget. Rent to anyone, anytime,
          anywhere."
          number="03"
        />
      </section>
      <section>
        <div className="p-4">
          <img src={speaker} alt="" />
        </div>
        <div className="flex gap-x-3 justify-center py-3 pb-5 px-6">
          <Button
            child="Our story"
            type="button"
            className=" bg-secondary text-white p-3  text-xs"
          />
          <Button
            child="Join Private Beta"
            type="button"
            className="outline-secondary text-secondary p-3  text-xs"
          />
        </div>
      </section>
      <section className="p-5">
        <h1 className="text-xl text-center">Stay in the Loop</h1>
        <p className="text-xs text-center mt-2 mb-8 pb-2">
          Get information and updates on our future release product updates and
          learning resources from the Rentaa team.
        </p>
      </section>
      <section className="pl-6 mt-3 flex items-center flex-col">
        <HomeInput
          label="firstName"
          labelName="First Name"
          type="text"
          className="border-b  my-2 border-black"
        />
        <HomeInput
          label="firstName"
          labelName="Last Name"
          type="text"
          className="border-b  my-2 border-black"
        />
        <HomeInput
          label="email"
          labelName="Email Address"
          type="email"
          className="border-b  my-2 border-black"
        />
      </section>
      <section className="px-3 flex justify-center my-10">
        <Button
          child="Subscribe to Our Newsletter"
          type="button"
          className="bg-secondary text-white p-3  text-sm mx-auto"
        />
      </section>

      <section className="mt-5">
        <hr className="w-100 h-0.5 bg-gray-500 mb-3 mx-auto px-3" />
        <div className="flex justify-between text-xs pt-4">
          <div>Rentaa @ 2022</div>
          <div>icons</div>
        </div>
      </section>
    </>
  );
}
