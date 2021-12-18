import React from "react";
import purpleBackground from "../../images/purpleBackground.svg";
import mobilePurpleBackground from "../../images/mobPurpleBg.svg";
import peoplePic from "../../images/people.svg";

export default function AccessMore() {
  return (
    <div className="block md:grid grid-col grid-cols-2 w-full">
      <div className="bg-purple-bg cover center bg-no-repeat">
        <img src={peoplePic} alt="" className="w-600 mx-auto mb-2" />
      </div>

      <div className="pt-30 px-7 md:px-11 space-y-5 md:space-y-6 md:tracking-wide font-dm-sans">
        <h1 className="text-xl text-center md:text-left md:text-4xl font-bold font-dm-sans md:pb-5">
          Access <span className="font-semibold">MORE </span> possibilities
        </h1>

        <p className="text-center md:text-left text-xs md:text-base">
          We’re rolling out{" "}
          <span className="text-secondary leading-5">PAY WITH RENTAA</span> to
          allow you access even more features on Rentaa.{" "}
        </p>

        <p className="text-center leading-5 md:text-left text-xs md:text-base">
          Giving you a payment gateway, so you can get paid right here on
          Rentaa, logistics and delivery services so you never have to lesve the
          comfort of your home and an insurance cover to ensure you’re always
          taken care of, regardless of damage.
        </p>

        <p className="text-center md:text-left text-xs md:text-base">
          We’re committed to building more for you.
        </p>
      </div>
    </div>
  );
}
