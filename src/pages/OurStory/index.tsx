import ImagePanel from "../../components/ImagePanel";
import LandingPageNavBar from "../../components/LandingPageNavBar";
import Newsletter from "../../components/Newsletter";
import OurMission from "../../components/OurMission";
import OurOrigins from "../../components/OurOrigins";
import WhatWeOffer from "../../components/WhatWeOffer";

const OurStory : React.FC = () => {
    return (
        <div className="pt-12">
            <LandingPageNavBar />
            <OurMission />
            <OurOrigins />
            <ImagePanel />
            <WhatWeOffer />
            <Newsletter />
        </div>
    )
}
export default OurStory;