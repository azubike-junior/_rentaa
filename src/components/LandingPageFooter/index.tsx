import React from 'react';
import InstagramIcon from '../../images/instagram.svg';
import FacebookIcon from '../../images/facebook.svg';
import TwitterIcon from '../../images/twitter.svg';

const LandingPageFooter : React.FC = () => {
    return (
      <footer className="border-t mt-20 pt-9 px-7 pb-6 md:px-20 bg-darkBlue fixed bottom-0 w-full text-white z-20 mx-auto ">
        <div className="flex justify-between container mx-auto  max-w-7xl">
          <p className="xs:text-xs xxs:text-xs text-xs md:text-xl">
            Rentaa @ 2022
          </p>
          <div className="xs:w-16 xxs:w-16 w-16 md:w-32 flex justify-between">
            <img className="xs:h-3 xxs:h-3 h-3 md:h-5 " src={InstagramIcon} />
            <img className="xs:h-3 xxs:h-3 h-3 md:h-5 " src={FacebookIcon} />
            <img
              className="xs:h-3 xxs:h-3 h-3 md:h-5 text-white"
              src={TwitterIcon}
            />
          </div>
        </div>
      </footer>
    );
}
export default LandingPageFooter;