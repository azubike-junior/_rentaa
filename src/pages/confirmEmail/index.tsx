import React from "react";

import logo from "../../images/logoframe.png";
import girl from "../../images/girl.svg";

const ConfirmEmail = () => {
  return (
    <section className="bg-secondary w-screen min-h-screen flex flex-col items-center">
      <div className="">
        <img src={logo} alt="" className="w-24 md:w-32 pt-10 overflow-hidden" />
      </div>

      <div className=" w-full px-9 pt-5 pb-11 md:pb-0 md:px-28 rounded-b-lg ">
        <img
          src={girl}
          alt=""
          className="object-cover h-48 w-full  md:h-48 md:w-full rounded-t-lg"
        />
        <article className="flex flex-col justify-between items-center bg-white pt-10 pb-20 md:pb-16 md:px-6 px-7 rounded-b-lg">
          <div className="basis-1/3 ">
            <h1 className="font-dm-sans font-semibold text-lg pt-3 md:text-2xl text-center mb-2 md:pt-10">
              Verify your Email Address
            </h1>
            <p className="font-dm-sans font-normal text-xs text-center pb-5 text-greyish md:text-xl md:w-90">
              Please check your email for a link to verify <br /> and complete
              your account setup
            </p>
          </div>

          <hr className="h-0.5 bg-border w-36 md:w-80" />

          <div className="basis-1/4 pt-11">
            <p className="font-dm-sans font-normal text-xs md:text-lg">
              Didn’t get any mail?
            </p>
            <p className="font-dm-sans font-normal text-xs md:text-lg">
              Click here to resend
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default ConfirmEmail;
