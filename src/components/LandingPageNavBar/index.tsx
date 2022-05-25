import React from 'react';
import RentaaLogo from '../../images/rentaa_white.svg';
import star from '../../images/star.svg';
import { motion } from 'framer-motion/dist/framer-motion';

const LandingPageNavBar : React.FC = () => {
    return (<>
    <nav className='hidden md:block container mx-auto px-6'>
        <div className="flex flex-row justify-between items-center mx-2">
            <div className="flex flex-row items-center">
                <motion.figure initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 0, duration: 0.2}}} className="mr-24">
                    <img className="sm:h-6 md:h-9" src={RentaaLogo} />
                </motion.figure>
                <ul className="flex flex-row">
                    <motion.li initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 0, duration: 0.2}}}  className="transition-all duration-300 lg:text-lg md:text-xs text-black mr-12 hover:text-black cursor-pointer">Home</motion.li>
                    <motion.li initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 0, duration: 0.2}}} className="transition-all duration-300 lg:text-lg md:text-xs text-darkCream mr-12 hover:text-black cursor-pointer">Our Story</motion.li>
                    <motion.li initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 0, duration: 0.2}}} className="transition-all duration-300 lg:text-lg md:text-xs text-darkCream mr-12 hover:text-black cursor-pointer">Contact Us</motion.li>
                    <motion.li initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 0, duration: 0.2}}} className="transition-all duration-300 lg:text-lg md:text-xs text-darkCream mr-12 hover:text-black cursor-pointer">FAQs</motion.li>
                </ul>
            </div>
            <motion.button initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 0, duration: 0.2}}} className="relative lg:px-7 md:px-5 lg:py-4 md:py-4 md:text-xs lg:text-lg rounded-md bg-secondary text-white text-lg">
                Join Private Beta
                <img className="absolute -top-5 -left-5" src={star} />
            </motion.button>
        </div>
    </nav>
    <nav className="md:hidden w-full mx-auto">
        <div className='mx-7 flex items-center justify-between'>
            <motion.figure initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 0, duration: 0.2}}}>
                <img className="h-6" src={RentaaLogo} />
            </motion.figure>
            <motion.button initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 0, duration: 0.2}}} className="relative px-5 py-3 text-xs rounded-md bg-secondary text-white">
                Join Private Beta
                <img className="absolute -top-3 -left-2 w-5 h-5" src={star} />
            </motion.button>
        </div>
        <ul className="flex flex-row mx-auto xs:w-72 w-80 xxs:w-56 sm:w-400 justify-between mt-5">
            <motion.li initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 0, duration: 0.2}}} className="transition-all duration-300 text-xs text-darkCream hover:text-black cursor-pointer">Home</motion.li>
            <motion.li initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 0, duration: 0.2}}} className="transition-all duration-300 text-xs text-darkCream hover:text-black cursor-pointer">Our Story</motion.li>
            <motion.li initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 0, duration: 0.2}}} className="transition-all duration-300 text-xs text-darkCream hover:text-black cursor-pointer">Contact Us</motion.li>
            <motion.li initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 0, duration: 0.2}}} className="transition-all duration-300 text-xs text-darkCream hover:text-black cursor-pointer">FAQs</motion.li>
        </ul>

    </nav>
    </>
    )
}
export default LandingPageNavBar;