import React from 'react';
import Speaker from '../../images/stereoSpeaker.svg';
const OptimizedForYou : React.FC = () => {
    return (
        <section className='mt-8 xl:mt-24'>
            <h3 className="xs:text-2xl xxs:text-2xl text-3xl md:text-4xl font-medium text-center mb-10 md:text-left md:ml-16 xl:ml-28 xl:text-6xl">Optimized for <span className="text-secondary">YOU</span></h3>
            <div className="relative md:flex md:h-650 xl:h-900 items-center">
                <article className='flex flex-col items-center md:ml-12 z-10 xl:ml-20'>
                    <div className='flex items-center gap-4 md:gap-14 xl:gap-28 mx-8 border-b-1 xxs:pb-2 xs:pb-2 pb-3 md:pb-10 xl:pb-16 border-black xxs:max-w-xs xs:max-w-xs max-w-md  xl:max-w-3xl'>
                        <p className='xxs:text-3xl xs:text-3xl text-4xl  text-black  xl:text-6xl'>01</p>
                        <p className='xxs:text-xs xs:text-xs text-sm md:text-base xl:text-xl xl:max-w-xmd xl:leading-9'>Access a wide range of available gadgets for rent. With filter based searches as well as powerful search recommendations custom made for you</p>
                    </div>
                    <div className='flex items-center gap-4 md:gap-14 xl:gap-28 mx-8 border-b-1 xxs:pb-2 xs:pb-2 pb-3 md:pb-10 xl:pb-16 border-black mt-11 xl:mt-14 xxs:max-w-xs xs:max-w-xs max-w-md  xl:max-w-3xl'>
                        <p className='xxs:text-3xl xs:text-3xl text-4xl text-black  xl:text-6xl'>02</p>
                        <p className='xxs:text-xs xs:text-xs text-sm md:text-base xl:text-xl xl:max-w-xmd xl:leading-9'>List gadgets at your own price and find prospective lenders fast. With zero lending costs, insurance cover and an amazing user experience</p>
                    </div>
                    <div className='flex items-center gap-4 md:gap-14 xl:gap-28 mx-8 border-b-1 xxs:pb-2 xs:pb-2 pb-3 md:pb-10 xl:pb-16 border-black mt-11 xxs:max-w-xs xs:max-w-xs max-w-md  xl:max-w-3xl'>
                        <p className='xxs:text-3xl xs:text-3xl text-4xl text-black  xl:text-6xl'>03</p>
                        <p className='xxs:text-xs xs:text-xs text-sm md:text-base xl:text-xl xl:max-w-xmd xl:leading-9'>Cost effective, easy and fast rental services on any gadget. Rent to anyone, from anyone, anytime, anywhere.</p>
                    </div>
                </article>
                <figure className='flex justify-center mt-14 px-8'>
                    <img className='xxs:mx-10 xxs:max-w-xs xs:max-w-xs max-w-md w-full md:max-w-xl xl:max-w-4xl md:absolute md:top-0 md:right-0' src={Speaker} />
                </figure>
            </div>
                <div className='mt-9 md:ml-14 xl:ml-28 xl:mt-16 text-center xl:text-left'>
                    <button className='xs:text-xs xxs:text-xs text-sm md:text-base xl:text-xl py-3 xl:py-5 px-5 xl:px-7 bg-secondary text-white rounded-md mr-5'>Join Private Beta</button>
                    <button className='xs:text-xs xxs:text-xs text-sm md:text-base xl:text-xl py-3 xl:py-5 px-5 xl:px-7 text-secondary border-2 rounded-md border-secondary'>Learn More</button>
                </div>
        </section>
    )
}

export default OptimizedForYou;