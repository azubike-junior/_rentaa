import ProfileHeaderBackground from '../../images/profileHeaderBackground.png';
import PersonImage from '../../images/personImage.png';
import gridImage1 from '../../images/gridImage1.png';
import gridImage2 from '../../images/gridImage2.png';
import gridImage3 from '../../images/gridImage3.png';
import gridImage4 from '../../images/gridImage4.png';
import gridImage5 from '../../images/gridImage5.png';
import gridImage6 from '../../images/gridImage6.png';
import noGadgetImage from '../../images/NoGadgetImages.svg';
import { useState } from 'react';

const UserProfileSection = () => {
    const [gadgetImages, setGadgetImages] = useState<string[]>([gridImage1, gridImage2, gridImage3, gridImage4, gridImage5, gridImage6]);
    return (
        <div className="w-full shadow-xmd rounded-20">
            <header className="px-9 h-52 mb-87px">
                <figure className='w-full h-full'>
                    <img src={ProfileHeaderBackground} className="w-full h-full object-cover rounded-b-100 overflow-hidden"/>
                </figure>
                <figure className='relative w-full flex justify-center top-135px'>
                    <img className='' src={PersonImage} />
                </figure>
            </header>
            <section className='px-7'>
                <p className='text-3xl font-medium text-center'>Daniel Jesusegun</p>
                <p className='inline-flex items-center gap-2 text-mediumGrey w-full justify-center mt-3'>
                    <span>Alimosho</span>
                    <span className='inline-block w-1 h-1 bg-mediumGrey rounded-full'></span>
                    <span>Lagos</span>
                </p>
                <p className='text-center font-medium text-2xl mt-14 mb-4'>About me</p>
                <p className='text-lg text-center mb-4'>Currently based in Lagos, Nigeria. Videographer and Cinematographer</p>
                <p className='text-lg text-center'>Renting out a Canon 5D Mark IV, a  Canon 1DX Mark II and a Canon 100mm f/2.8L IS</p>
                <div className='flex justify-center'>
                    <button className='rounded-md py-5 px-7 bg-secondary text-white mx-auto mt-20'>Post a Gadget</button>
                </div>
                <p className='mt-20 text-2xl text-center'>View My Gadgets</p>
            </section>
                {   gadgetImages &&
                    <section className='grid mx-auto mt-9 grid-cols-3 max-w-3xl gap-x-6 gap-y-9 pb-24 px-7'>
                    {gadgetImages.map(gadgetImage => (
                        <div className='max-w-296px max-h-193px'><img src={gadgetImage} className="w-full h-full"/></div>
                    ) )}
                    </section>
                }           
                {
                    !gadgetImages && 
                    <div className='flex flex-col items-center mx-auto w-full mt-14 pb-24'>
                        <figure className='max-w-xs'>
                            <img src={noGadgetImage} className="w-full" />
                        </figure>
                        <p className='mt-4'>Nothing to see here. Try posting some gadgets</p>
                    </div>
                }
        </div>
    );
}
export default UserProfileSection;