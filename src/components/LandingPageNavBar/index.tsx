import React from 'react';
import RentaaLogo from '../../images/rentaa_white.svg';

const LandingPageNavBar : React.FC = () => {
    return (
    <nav className='h-9 container mx-auto'>
        <figure className="mr-[100px]">
            <img src={RentaaLogo} />
        </figure>
        <ul className="flex flex-row">
            <li className="text-[17px] text-[#8E8E8E] mr-[60px]">Home</li>
            <li className="text-[17px] text-[#8E8E8E] mr-[60px]">Our Story</li>
            <li className="text-[17px] text-[#8E8E8E] mr-[60px]">Contact Us</li>
            <li className="text-[17px] text-[#8E8E8E] mr-[60px]">FAQs</li>
        </ul>
    </nav>
    )
}
export default LandingPageNavBar;