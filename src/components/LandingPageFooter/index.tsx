import React from "react";
import InstagramIcon from "../../images/instagram.svg";
import FacebookIcon from "../../images/facebook.svg";
import TwitterIcon from "../../images/twitter.svg";
import { Link, useLocation } from "react-router-dom";
import { classNames } from "./../../utils/classNames";

const LandingPageFooter: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <footer
      className={classNames(
        pathname === "/" && "fixed bottom-0",
        "border-t pt-9 px-7 pb-6 md:px-20 bg-darkBlue  w-full text-white z-20 mx-auto "
      )}
    >
      <div className="flex justify-between container mx-auto  max-w-7xl">
        <p className="xs:text-xs xxs:text-xs text-xs md:text-xl">
          Rentaa @ 2022
        </p>
        <div className="xs:w-16 xxs:w-16 w-16 md:w-32 flex justify-between">
          <a href="https://instagram.com/rentaa_ng?igshid=YmMyMTA2M2Y=">
            <img className="xs:h-3 xxs:h-3 h-3 md:h-5 " src={InstagramIcon} />
          </a>
          <a
            target="_blank"
            href="https://www.facebook.com/rentaa_ng-107564238417766/"
          >
            <img className="xs:h-3 xxs:h-3 h-3 md:h-5 " src={FacebookIcon} />
          </a>
          <a
            target="_blank"
            href="https://twitter.com/rentaa_ng/status/1526565845979348993?s=21"
          >
            <img
              className="xs:h-3 xxs:h-3 h-3 md:h-5 text-white"
              src={TwitterIcon}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};
export default LandingPageFooter;
