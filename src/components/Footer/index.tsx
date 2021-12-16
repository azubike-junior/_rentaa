import React from "react";
import rentaa from "../../images/rentaa_white.svg";
import instagram from "../../images/instagram.svg";
import facebook from "../../images/facebook.svg";
import twitter from "../../images/twitter.svg";

export default function Footer() {
  return (
    <div className="w-full text-white bg-darkAsh">
      <div>
        <img src={rentaa} alt="rentaa" />
        <div>
          <img src={instagram} alt="" />
          <img src={facebook} alt="" />
          <img src={twitter} alt="" />
        </div>
      </div>

      <div>
          
      </div>
    </div>
  );
}
