import React from "react";
import AccessPossibilities from "../../components/AccessPossibilities";
import ImagePanel from "../../components/ImagePanel";
import LandingPageFooter from "../../components/LandingPageFooter";
import LandingPageNavBar from "../../components/LandingPageNavBar";
import Newsletter from "../../components/Newsletter";
import OptimizedForYou from "../../components/OptimizedForYou";
import Sidebar from "../../components/Sidebar";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const LandingPage: React.FC = () => {
  const { sidebarOpen } = useSelector((state: RootState) => state.modalReducer);

  return (
    <div className="bg-greyishWhite xs:pt-5 xxs:pt-4 pt-5 md:py-8 lg:pt-12 font-dm-sans">
      {sidebarOpen && <Sidebar />}
      <LandingPageNavBar />
      <AccessPossibilities />
      {/* <ImagePanel />
        <OptimizedForYou />
        <Newsletter /> */}
      <LandingPageFooter />
    </div>
  );
};

export default LandingPage;
