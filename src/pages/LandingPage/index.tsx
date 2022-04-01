import React from 'react';
import AccessPossibilities from '../../components/AccessPossibilities';
import ImagePanel from '../../components/ImagePanel';
import LandingPageNavBar from '../../components/LandingPageNavBar';
import Newsletter from '../../components/Newsletter';
import OptimizedForYou from '../../components/OptimizedForYou';

const LandingPage : React.FC = () => {
    return (
    <div className='bg-greyishWhite pt-2 lg:pt-12'>
        <LandingPageNavBar />
        <AccessPossibilities />
        <ImagePanel />
        <OptimizedForYou />
        <Newsletter />
    </div>
    )
}

export default LandingPage;