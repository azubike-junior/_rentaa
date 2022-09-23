import ourMissionBackground from '../../images/ourMissionBackground.png';

const OurMission : React.FC = () => {
    return (
        <div className="snap-start px-7 md:px-12 lg:px-6 pt-12 container mx-auto max-w-7xl">
                <figure className="relative w-full h-86 md:h-full max-h-156">
                    <img src={ourMissionBackground} className="w-full h-full max-h-156 object-cover"/>
                    <div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-70 ">
                    </div>
                    <div className='absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center lg:gap-6 gap-4 px-4 z-10'>
                        <p className="text-2xl lg:text-5xl font-bold text-white font-dosis">Our Mission</p>
                        <p className=" text-xs lg:text-2xl font-dm-sans text-white font-normal max-w-xxs lg:max-w-lg text-center">Quality peer-to-peer gadget lending services for anyone, from anywhere.</p>
                    </div>
                </figure>
            </div>
    );
}
export default OurMission;