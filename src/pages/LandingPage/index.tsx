import React from 'react';
import AccessPossibilities from '../../components/AccessPossibilities';
import LandingPageNavBar from '../../components/LandingPageNavBar';

const LandingPage : React.FC = () => {
    return (<>
        <LandingPageNavBar />
        <AccessPossibilities />
    </>
    )
}

export default LandingPage;