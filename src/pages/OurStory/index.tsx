import ImagePanel from "../../components/ImagePanel";
import LandingPageNavBar from "../../components/LandingPageNavBar";
import Newsletter from "../../components/Newsletter";
import OurMission from "../../components/OurMission";
import OurOrigins from "../../components/OurOrigins";
import WhatWeOffer from "../../components/WhatWeOffer";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Sidebar from "./../../components/Sidebar/index";

const OurStory: React.FC = () => {
  const { sidebarOpen } = useSelector((state: RootState) => state.modalReducer);

  return (
    <div className="snap-y snap-mandatory pt-2 overflow-scroll">
      <Sidebar/>
      <LandingPageNavBar />
      <OurMission />
      <OurOrigins />
      <ImagePanel />
      <WhatWeOffer />
      <Newsletter />
    </div>
  );
};
export default OurStory;
