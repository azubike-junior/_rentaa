import Button from "../Button";
import Product from "../Product";
import "../../styles/homeGrid.css";
import drone from "../../images/drone.svg";
import cameraImg from "../../images/camera.svg";
import camera from "../../images/camera-2.svg";
import speaker from "../../images/speaker.svg";
import mixer from "../../images/mixer.svg";
import game from "../../images/game.svg";
import headset from "../../images/headset.svg";
import { Link } from 'react-router-dom';

export default function ProductSection() {
  return (
    <div className="max-w-7xl px-8 mx-auto font-dm-sans text-center mt-10 md:mt-24">
      <h1 className="text-left text-xl font-medium md:text-3xl mt-7">
        Today's top picks
      </h1>
      <h2 className="text-left text-xs mt-1 mb-8 md:text-base">
        Browse our recommended products for you to rent. All verified for order.
      </h2>
      <div className="p-0 grid xxs:grid-cols-1 xs:grid-cols-2 justify-items-center xxs:place-items-center sm:gap-6 sm:grid-cols-2 md:grid-cols-3 md:pl-3 md:gap-16 grid-flow-row lg:gap-10 lg:grid-cols-4 xl:pl-5 xl:grid-cols-6">
        <Product imageUrl={camera} productName="Cameras" price={20000} />
        <Product
          imageUrl={drone}
          productName="5G Wifi Quad Drone"
          price={20000}
        />
        <Product
          imageUrl={speaker}
          productName="M5 Energy Spread"
          price={20000}
        />
        <Product
          imageUrl={mixer}
          productName="Behringer X32 Mixer"
          price={20000}
        />
        <Product
          imageUrl={game}
          productName="Sony PlayStation 5"
          price={20000}
        />
        <Product
          imageUrl={headset}
          productName="GI05 Sound Xpress"
          price={20000}
        />
      </div>
      <Link to="/product_desc">
        <Button
        child="View more"
        type="button"
        className="xxs:w-44 xs:px-7 md:w-64 bg-secondary mb-8 mt-6 md:mt-9 py-5 md:py-6 font-dm-sans md:text-lg text-white rounded"
      />
      </Link>
    </div>
  );
}
