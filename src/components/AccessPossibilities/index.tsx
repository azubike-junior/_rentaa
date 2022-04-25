import React from 'react';
import iphone from '../../images/iphone.svg';
import BottomLeft from '../../images/bottomLeft.png';
import BottomRight from '../../images/bottomRight.png';
import TopLeft from '../../images/topLeft.svg';

const AccessPossibilities : React.FC = () => {
    return (
        <section className="mt-12 lg:flex lg:items-center flex-row-reverse container lg:justify-between mx-auto px-8 xl:h-600">
            <div data-aos="fade-up" data-aos-duration="3000" className='relative xxs:hidden xs:hidden sm:hidden md:hidden lg:block w-90 mx-auto xl:w-500 xl:h-600 lg:m-0 md:w-96 md:h-96'>
                <img className='absolute w-400 mt-24 z-10' src={iphone} />
                <img className='absolute xxs:w-18 xs:w-18 w-40 z-0 lg:-bottom-96 xl:-bottom-96 -left-28 lg:h-56 xl:h-60' src={BottomLeft} />
                <img className='absolute xxs:w-24 xs:w-24 w-32 h-60 -bottom-1 -right-3 lg:hidden xl:block' src={BottomRight} />
                {/* <img className='absolute xxs:w-24 xs:w-24 w-32 -top-3 -left-2' src={TopLeft} /> */}
            </div>
            <article className='mt-14'>
            <p data-aos="fade-right" data-aos-duration="2000" className="xs:w-64 font-dm-sans xxs:w-64 xs:text-2xl xxs:text-2xl text-3xl md:text-4xl md:w-80 w-72 text-center lg:text-5xl lg:w-500 lg:text-left mx-auto lg:mx-0 font-medium">Access a <span className='text-secondary'>world</span> of creative <span className='text-secondary'>possibilties</span></p>
                <p className="xs:w-80 xxs:w-60 xs:text-xs xxs:text-xs leading-6 text-sm md:text-base lg:text-xl text-center lg:text-left w-400 md:w-500 xl:w-600 mx-auto lg:mx-0  font-normal mt-4 lg:mt-10">We’re building <span className="font-bold">faster</span> and <span className='font-bold'>stress-free</span>  ways to rent gadgets from, and to anyone without any hassle. Giving you complete <span className="font-bold">access</span> to work better, and earn better.</p>
                <div className='mt-6 lg:mt-16 text-center lg:text-left'>
                    <button data-aos="zoom-in" className='xs:text-xs xxs:text-xs text-sm md:text-base lg:text-lg py-3 lg:py-4 px-5 lg:px-7 bg-secondary text-white rounded-md mr-5'>Our story</button>
                    <button data-aos="zoom-in" className='xs:text-xs xxs:text-xs text-sm md:text-base lg:text-lg py-3 lg:py-4.5 px-5 lg:px-7 text-secondary border-2 rounded-md border-secondary'>Join Private Beta</button>
                </div>
            {/* Set the line hieght of the second paragraph to 18px */}
            {/* Remember to change the line height of the first paragraph to 65.1px */}
            {/* Rewmber to change the z-index of some items in the figure element */}
            </article>
            <figure data-aos="fade-up" data-aos-duration="3000" className='lg:hidden xxs:w-64 xs:mx-auto xs:w-72 xs:h-72 w-90 mx-auto xl:w-500 xl:h-600 lg:m-0 md:w-96 md:h-96'>
                <img className='w-400 mt-24 z-10' src={iphone} />
            </figure>
        </section>
    )   
}

export default AccessPossibilities;