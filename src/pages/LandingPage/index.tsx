import React from 'react'
import { useSelector } from 'react-redux'
import AccessPossibilities from '../../components/AccessPossibilities'
import LandingPageFooter from '../../components/LandingPageFooter'
import LandingPageNavBar from '../../components/LandingPageNavBar'
import Sidebar from '../../components/Sidebar'
import { RootState } from '../../store/store'

const LandingPage: React.FC = () => {
  const { sidebarOpen } = useSelector((state: RootState) => state.modalReducer)

  return (
    <div className="bg-greyishWhite xs:pt-5 xxs:pt-4 pt-5 md:py-8 lg:pt-2 font-dm-sans">
      <Sidebar />
      <LandingPageNavBar />
      <AccessPossibilities />
      {/* <ImagePanel />
        <OptimizedForYou />
        <Newsletter /> */}

      <LandingPageFooter />
    </div>
  )
}

export default LandingPage
