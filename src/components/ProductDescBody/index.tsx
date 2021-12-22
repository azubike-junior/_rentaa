import React from "react";
import camera from "../../images/camera-2.svg";
import Button from "./../Button/index";
import phone from "../../images/whitePhone.svg";
import Product from "../Product";

function SingleProduct({ img }: any) {
  return (
    <div className="border w-48 h-64">
      <img src={img} alt="" className=" w-48 h-64" />
    </div>
  );
}

export default function ProductDescBody() {
  return (
    <div className="max-w-7xl mx-auto px-8 font-dm-sans mb-20">
      <h1 className="text-base md:text-xl pb-3">Product Description:</h1>
      <p className="  leading-7 md:leading-9 text-sm md:text-base pb-3">
        Low-voltage protection Over-current protection Level calibration
        function Pressure hovering height adjustment function Auto Takeoff 3D
        Tumbling 1080P aerial photo-taking / video recording function Fine
        tuning function Fling-fly action APP Control WiFi FPV Headless mode One
        key auto return Trajectory Flight Turn left / right, forward / backward,
        up / down, left / right sideward flightType: Quadcopter Features:
      </p>
      <p className=" leading-7 md:leading-9 text-sm md:text-base">
        Camera,WiFi FPV,WiFi APP Control Functions:
        Up/down,Forward/backward,Turn left/right,Sideward flight,3D
        rollover,Self altitudes and position hold,One Key Automatic
        Return,Headless Mode,One Key Taking Off,One Key Landing,Height
        Holding,WiFi Connection,Over-current Protection,Low-voltage Protection.
        Air Press Altitude Hold,Gravity Sense Control,Hand Launching,Aerial
        Photography,Auto Landing,Auto Hover Size: Large Sensor: Barometer Night
        Flight: Yes Built-in Gyro: 6 Axis Gyro Material: Plastic,Electronic
        Component.
      </p>

      <div className="pt-16">
        <h1 className="text-base md:text-xl pb-3">Product Pictures:</h1>

        <div className="px-7 place-content-center grid grid-flow-row md:gap-y-6 md:pb-6 md:px-7 md:gap-x-0  md:grid-cols-3 gap-y-2 lg:gap-y-7 lg:gap-x-10 lg:px-0 lg:grid-cols-4 xl:grid-cols-6 ">
          <SingleProduct img={camera} />
          <SingleProduct img={camera} />
          <SingleProduct img={camera} />
          <SingleProduct img={camera} />
          <SingleProduct img={camera} />
        </div>
      </div>

      <div className="">
        <p className="pt-14 pb-10 text-xl">
          Do you want to rent this gadget from{" "}
          <span className="text-secondary">Olaotan Faji?</span>{" "}
        </p>
        <Button
          className="py-5 px-4 bg-secondary text-sm md:text-base lg:px-4 lg:py-4 xl:px-14 xl:py-4 mb-4 text-white mr-8"
          child="View Olaotan’s Contact"
          type="button"
          img={phone}
        />
        <Button
          className="py-4 px-8 text-sm md:text-lg lg:px-4 lg:py-4 xl:px-10 xl:py-3.5 mb-6 border-2 border-secondary text-secondary mr-8"
          child="View Olaotan’s Profile"
          type="button"
        />
      </div>

      <div>
        <p className="pt-14 pb-10 text-xl">
          More gadgets from <span className="text-secondary">Olaotan Faji</span>{" "}
        </p>

        <div className="p-0 grid xxs:grid-cols-1 xs:grid-cols-2 justify-items-center xxs:place-items-center sm:gap-6 sm:grid-cols-2 md:grid-cols-3 md:pl-3 md:gap-16 grid-flow-row lg:gap-10 lg:grid-cols-4 xl:pl-5 xl:grid-cols-6">
          <Product
            imageUrl="https://demo3.admorris.com/media/image/product/11699/lg/dslr-kamera-21mp.jpg"
            productName="Cameras"
            price={20000}
          />
          <Product
            imageUrl="https://demo3.admorris.com/media/image/product/11699/lg/dslr-kamera-21mp.jpg"
            productName="Cameras"
            price={20000}
          />
          <Product
            imageUrl="https://demo3.admorris.com/media/image/product/11699/lg/dslr-kamera-21mp.jpg"
            productName="Cameras"
            price={20000}
          />
        </div>
      </div>
    </div>
  );
}
