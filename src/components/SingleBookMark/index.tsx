import React from "react";
import Button from "./../Button/index";
import phoneImg from "../../images/phone.svg";

interface BookmarkProp {
  img: string;
  product: string;
  price: string;
  name: string;
}

export default function SingleBookMark({
  img,
  product,
  price,
  name,
}: BookmarkProp) {
  return (
    <div className=" xxs:grid xxs:place-items-center  xs:flex sm:flex flex flex-row my-20">
      <img src={img} alt="" className="xxs:pb-2 w-40 mr-6 md:w-72 md:pr-10" />
      <div className="md:pt-6 xxs:pl-4">
        <h1 className=" text-black text-lg md:text-2xl font-dm-sans">
          {product}
        </h1>
        <p className=" text-gray-400 text-xs md:text-base">{price}</p>
        <p className="text-gray-400 pt-2 md:pt-5 text-sm md:text-lg font-dm-sans">
          Posted by <span className=" text-secondary">{name}</span>
        </p>
        <div className="block md:flex flex-row pt-4 md xxs: place-items-center:pt-9 font-dm-sans">
          <Button
            className=" bg-secondary mb-3 md:mb-0 text-sm md:text-lg py-2 md:py-5 text-white px-4 md:px-7 mr-6"
            child="View More"
            type="button"
          />
          <Button
            className=" border-2 text-sm md:text-lg border-secondary py-2 md:py-4 text-secondary px-6 xs:px-3"
            child="View Contact Info"
            type="button"
            img={phoneImg}
          />
        </div>
      </div>
    </div>
  );
}
