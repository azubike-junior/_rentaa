import React from 'react';
import InstagramIcon from '../../images/InstagramFooterIcon.svg';
import FacebookIcon from '../../images/FacebookFooterIcon.svg';
import TwitterIcon from '../../images/TwitterFooterIcon.svg';

const LandingPageFooter : React.FC = () => {
    return (
        <footer className='border-t mt-20 pt-9 px-7 pb-6 md:px-20'>
            <div className="flex justify-between container mx-auto">
                <p className='xs:text-xs xxs:text-xs text-xs md:text-xl'>Rentaa @ 2022</p>
                <div className="xs:w-16 xxs:w-16 w-16 md:w-32 flex justify-between">
                    <img className='xs:h-3 xxs:h-3 h-3 md:h-5'  src={InstagramIcon} />
                    <img className='xs:h-3 xxs:h-3 h-3 md:h-5'  src={FacebookIcon} />
                    <img className='xs:h-3 xxs:h-3 h-3 md:h-5'  src={TwitterIcon} />
                </div>
            </div>
        </footer>
    )
}
export default LandingPageFooter;