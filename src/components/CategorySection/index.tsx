import Button from "../Button";
import Category from "../Category";
import "../../styles/homeGrid.css";
import { Link } from "react-router-dom";
import camera from "../../images/camera-2.svg";
import sound from "../../images/sound-2.svg";
import laptop from "../../images/laptop.svg";
import game from "../../images/game-2.svg";
import apple from "../../images/applePc.svg";
import projector from "../../images/projector.svg";
import drone from "../../images/drone2.svg";
import airpod from "../../images/airpod.svg";
import phone from "../../images/phone2.svg";

export default function CategorySection() {
  return (
    <div className="max-w-7xl px-8 mx-auto font-dm-sans text-center mt-10 md:pb-24 md:my-20 ">
      <h1 className="text-left xs:text-base sm:text-xl font-medium  md:text-3xl py-7">
        Browse Product Categories
      </h1>
      {/* <div className="gridContainer flex-wrap"> */}
      <div className="grid xxs:grid-cols-1 xs:grid-cols-2 justify-items-center xxs:place-items-center sm:gap-6 sm:grid-cols-2 md:grid-cols-3 md:pl-3 md:gap-16 grid-flow-row lg:gap-10 lg:grid-cols-4 xl:pl-5 xl:grid-cols-6">
        <Category imageUrl={camera} categoryName="Cameras" />
        <Category imageUrl={sound} categoryName="Sound Equipment" />
        <Category imageUrl={laptop} categoryName="Laptops/PCs" />
        <Category imageUrl={game} categoryName="Gaming" />
        <Category imageUrl={projector} categoryName="Projectors" />
        <Category imageUrl={drone} categoryName="Drones" />
        <Category imageUrl={apple} categoryName="Screen/Monitors" />
        <Category imageUrl={phone} categoryName="Phones" />
        <Category imageUrl={airpod} categoryName="Others" />
      </div>
      <h2 className="xs:text-base sm:text-lg md:text-2xl mt-10">
        Want to post a gadget for rent?
      </h2>

      <Link to="/post_product">
        <Button
          child="List Gadgets for rent"
          type="button"
          className="xxs:w-44 xs:px-4 xxs:text-sm md:w-500 bg-secondary mb-8 mt-6 md:mt-9 py-5 md:py-7 font-dm-sans md:text-lg text-white rounded"
        />
      </Link>
    </div>
  );
}

export {};
