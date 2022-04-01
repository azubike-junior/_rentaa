import React from 'react';
import AccessPossibilities from '../../components/AccessPossibilities';
import ImagePanel from '../../components/ImagePanel';
import LandingPageNavBar from '../../components/LandingPageNavBar';
import OptimizedForYou from '../../components/OptimizedForYou';

const LandingPage : React.FC = () => {
    return (<>
        <LandingPageNavBar />
        <AccessPossibilities />
        <ImagePanel />
        <OptimizedForYou />
    </>
    )
}

export default LandingPage;