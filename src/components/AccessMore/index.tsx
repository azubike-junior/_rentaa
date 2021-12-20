import React from "react";
import purpleBackground from "../../images/purpleBackground.svg";
import mobilePurpleBackground from "../../images/mobPurpleBg.svg";
import peoplePic from "../../images/people.svg";

export default function AccessMore() {
  return (
    <div className="block my-16 md:block lg:grid md:my-20 lg:my-0  md:px-5 grid-col gap-0 grid-cols-2 w-full lg:px-0 lg:mt-44 xl:mt-48 2xl:hidden">
      <div className="relative px-4 md:px-0 ">
        <img
          src={purpleBackground}
          alt=""
          className="hidden md:hidden lg:block xl:w-700"
        />
        <img
          src={peoplePic}
          alt=""
          className="mx-auto md:w-96 xl:w-600 lg:absolute md:left-20 md:-top-5 xl:left-20 xl:-top-32"
        />
      </div>

      <div className=" py-4 px-5 space-y-5 md:space-y-3  lg:space-y-6 lg:tracking-wide font-dm-sans xl:max-w-2xl">
        <h1 className="text-sm text-center md:text-center lg:text-left md:text-lg lg:text-2xl xl:text-4xl font-bold font-dm-sans md:pb-5">
          Access <span className="font-semibold">MORE </span> possibilities
        </h1>

        <p className="text-center lg:text-left font-dm-sans text-xs md:text-base xl:text-lg">
          We’re rolling out{" "}
          <span className="text-secondary leading-5">PAY WITH RENTAA</span> to
          allow you access even more features on Rentaa.{" "}
        </p>

        <p className="text-center leading-5 lg:text-left font-dm-sans text-xs md:text-base xl:text-lg">
          Giving you a payment gateway, so you can get paid right here on
          Rentaa, logistics and delivery services so you never have to leave the
          comfort of your home and an insurance cover to ensure you’re always
          taken care of, regardless of damage.
        </p>

        <p className="text-center lg:text-left font-dm-sans text-xs md:text-base xl:text-lg">
          We’re committed to building more for you.
        </p>
      </div>
    </div>
  );
}
