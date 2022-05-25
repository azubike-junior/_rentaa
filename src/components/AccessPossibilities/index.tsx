import React from 'react';
import LandingPageImage from '../../images/LandingPageImage.png';
import BottomLeft from '../../images/bottomLeft.png';
import BottomRight from '../../images/bottomRight.png';
import TopLeft from '../../images/topLeft.svg';
import { motion } from 'framer-motion/dist/framer-motion';


const AccessPossibilities : React.FC = () => {
    return (
        <section className="mt-12 lg:flex lg:items-center flex-row-reverse container lg:justify-between mx-auto px-8 xl:h-600">
            <figure className='relative xxs:w-64 xs:mx-auto xs:w-72 xs:h-72 w-90 mx-auto xl:w-500 xl:h-600 lg:m-0 md:w-96 md:h-96'>
                <motion.img initial={{opacity: 0, scale: 0.9}} animate={{opacity: 1, scale: 1, transition: {delay: 1.2, duration: 0.2} }} className='w-full z-10 rounded-md' src={LandingPageImage} />
                <motion.img initial={{opacity: 0, y: 70}} animate={{opacity: 1, y: 0, transition: {delay: 1.6, duration: 0.4} }} className='absolute xxs:w-18 xs:w-18 w-26 -bottom-7 -left-4' src={BottomLeft} />
                <motion.img initial={{opacity: 0, y: 70}} animate={{opacity: 1, y: 0, transition: {delay: 1.75, duration: 0.4} }} className='absolute xxs:w-24 xs:w-24 w-32  -bottom-3 -right-3' src={BottomRight} />
                <motion.img initial={{opacity: 0, y: 70}} animate={{opacity: 1, y: 0, transition: {delay: 1.45, duration: 0.4} }} className='absolute xxs:w-24 xs:w-24 w-32 -top-3 -left-2' src={TopLeft} />
            </figure>
            <article className='mt-14'>
                <motion.p initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 2.7, duration: 0.4, ease: 'easeOut'}}} className="xs:w-64 xxs:w-64 xs:text-2xl xxs:text-2xl text-3xl md:text-4xl md:w-80 w-72 text-center lg:text-5xl lg:w-500 lg:text-left mx-auto lg:mx-0 font-medium lg:leading-12 ">Access a <span className='text-secondary'>world</span> of creative <span className='text-secondary'>possibilties</span></motion.p>
                <motion.p initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 2.7, duration: 0.4, ease: 'easeOut'}}}
                 className="xs:w-80 xxs:w-64 xs:text-xs xxs:text-xs text-sm md:text-base lg:text-xl text-center lg:text-left w-400 md:w-500 xl:w-600 mx-auto lg:mx-0  font-normal mt-4 lg:mt-10">We’re building <span className="font-medium">faster</span> and stress- free ways to rent gadgets from, and to anyone without any hassle. Giving you complete <span className="font-medium">access</span> to work better, and earn better.</motion.p>
                <div className='mt-6 lg:mt-16 text-center lg:text-left'>
                    <motion.button initial={{opacity: 0, scale: 0.9}} animate={{opacity: 1, scale: 1, transition: {delay: 2.7, duration: 0.4, ease: 'easeOut'}}} className='xs:text-xs xxs:text-xs text-sm md:text-base lg:text-lg py-3 lg:py-5 px-5 lg:px-7 bg-secondary text-white rounded-md mr-5'>Our story</motion.button>
                    <motion.button initial={{opacity: 0, scale: 0.9}} animate={{opacity: 1, scale: 1, transition: {delay: 2.7, duration: 0.4, ease: 'easeOut'}}} className='xs:text-xs xxs:text-xs text-sm md:text-base lg:text-lg py-3 lg:py-5 px-5 lg:px-7 text-secondary border-2 rounded-md border-secondary'>Join Private Beta</motion.button>
                </div>
            {/* Set the line hieght of the second paragraph to 18px */}
            {/* Remember to change the line height of the first paragraph to 65.1px */}
            {/* Rewmber to change the z-index of some items in the figure element */}
            {/* TODO: On mobile, ensure that the text animates in before the image */}
            </article>
        </section>
    )
}

export default AccessPossibilities;