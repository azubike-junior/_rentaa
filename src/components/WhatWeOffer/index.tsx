import Speaker from '../../images/speaker.png';
import SpeakerWithPattern from '../../images/speakerWithPattern.png';
const WhatWeOffer : React.FC = () => {
    return (
        <div className="w-full snap-start bg-secondary pt-12 lg:pt-32 pb-28 lg:pb-44 mb-28 mt-24 lg:mt-44">
            <div className='w-full grid grid-cols-1 lg:px-4 lg:grid-cols-2 justify-center gap-4'>
                <div>
                    <figure className="relative max-w-sm lg:max-w-md xl:max-w-2xl mx-auto px-9 lg:px-0">
                        <img src={SpeakerWithPattern} className="hidden lg:block w-full relative -top-7"/>
                        <img src={Speaker} className="w-full lg:hidden" />
                    </figure>
                </div>
                <div className="text-white max-w-mxl lg:max-w-lg xl:max-w-mxl mx-auto lg:px-0 mt-9 lg:mt-0">
                    <h2 className="text-2xl lg:text-5xl xl:text-16 text-center lg:text-left font-dosis font-bold mb-12 lg:mb-14">What We Offer</h2>
                    <article className="max-w-mxl text-xs px-6 lg:px-0 lg:text-base xl:text-21 text-center lg:text-left leading-5 xl:leading-9  flex flex-col gap-10 xl:gap-14">
                        <div>
                            <p>Access a wide range of available gadgets for rent</p>
                            <p>With filter based searches as well as powerful  search <br className='lg:hidden'/> recommendations custom made for you</p>
                        </div>
                        <div>
                            <p>List gadgets at your own price and find prospective <br className='lg:hidden'/> lenders fast.</p>
                            <p> With zero lending costs, insurance cover and an amazing user experience</p>
                        </div>
                        <div>
                            <p>Cost effective, easy and fast rental services on any <br className='lg:hidden'/> gadget</p>
                            <p>Rent to anyone, from anyone, anytime, anywhere</p>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    );
}
export default WhatWeOffer;