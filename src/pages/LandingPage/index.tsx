import React from 'react';
import AccessPossibilities from '../../components/AccessPossibilities';
import ImagePanel from '../../components/ImagePanel';
import LandingPageNavBar from '../../components/LandingPageNavBar';

const LandingPage : React.FC = () => {
    return (<>
        <LandingPageNavBar />
        <AccessPossibilities />
        <ImagePanel />
    </>
    )
}

export default LandingPage;