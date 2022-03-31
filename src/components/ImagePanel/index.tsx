import React from 'react';
import PanelImage1 from '../../images/panelImage1.svg';
import PanelImage2 from '../../images/panelImage2.svg';
import DesktopPanelImage1 from '../../images/desktopPanelImage1.svg';
import DesktopPanelImage2 from '../../images/desktopPanelImage2.svg';
import DesktopPanelImage3 from '../../images/desktopPanelImage3.svg';

const ImagePanel : React.FC = () => {
    return (<>
        <section className="lg:hidden w-full mt-20 flex">
            <img className="ml-4" src={PanelImage1} />
            <img className='' src={PanelImage2} />
        </section>
        <section className="hidden w-screen mt-20 lg:flex h-700 overflow-hidden">
            <img className='' src={DesktopPanelImage3} />
            <img className="ml-11 mr-11" src={DesktopPanelImage1} />
            <img className='' src={DesktopPanelImage2} />
        </section>
    </>
    )
}
export default ImagePanel;