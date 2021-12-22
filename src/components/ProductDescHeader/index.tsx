import React from "react";
import Button from "./../Button";
import bookmark from "../../images/bookmarkGray.svg";
import camera from "../../images/soundEquipment.png";
import phone from "../../images/whitePhone.svg";

export default function ProductDescHeader() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-16 font-dm-sans">
      <h1 className="text-2xl text-center md:text-justify md:text-4xl font-dm-sans pb-8">
        Canon 5D Mark IV
      </h1>
      <div className="px-30 pb-14 md:flex">
        <img
          src={camera}
          alt=""
          className="mx-auto md:mx-0 w-64 lg:w-400 lg:h-64 md:mr-10 lg:mr-14 xl:mr-20"
        />
        <div className="pt-3 lg:pt-7">
          <p className="text-xl text-center md:text-justify text-gray-400 pb-5">
            Posted by <span className=" text-secondary">Olaotan Faji</span>{" "}
          </p>
          <p className="text-xl text-center md:text-justify md:text-2xl text-gray-400 pb-9">
            #20,000/week
          </p>

          <div className="grid place-content-center lg:flex">
            <Button
              className="py-5 px-8 bg-secondary text-sm md:text-lg lg:px-4 lg:py-4 xl:px-8 xl:py-5 mb-6 text-white mr-8"
              child="View Contact Info"
              type="button"
              img={phone}
            />
            <div className="flex lg:justify-center lg:items-center lg:pb-4">
              {" "}
              <img src={bookmark} className="w-5 mr-3" alt="" />
              <p className="text-xl text-gray-400">Save to Bookmarks</p>
            </div>
          </div>
        </div>
      </div>

      <div className=" font-dm-sans text-base md:text-xl space-y-4 text-center md:text-left ">
        <p className="">
          Product Category: <span className="text-secondary"> Cameras</span>
        </p>
        <p>Location: Lagos Mainland, Lagos</p>
        <p>Gadget Condition: Brand New</p>
      </div>
    </div>
  );
}
