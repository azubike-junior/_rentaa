import React from "react";
import Button from "./../Button/index";
import phoneImg from "../../images/phone.svg";

interface BookmarkProp {
  img: string;
  product: string;
  price: string;
  name: string;
  buttonClass?: string;
  buttonClass2?: string;
  imgClass: any
  divClass: any
}

export default function SingleBookMark({
  img,
  product,
  price,
  name,
  buttonClass,
  buttonClass2,
  imgClass,
  divClass
}: BookmarkProp) {
  return (
    <div className=" xxs:grid xxs:place-items-center  xs:flex sm:flex flex flex-row my-12">
      <img src={img} alt="" className={imgClass} />
      <div className="md:pt-6 xxs:pl-4">
        <h1 className=" text-black text-lg md:text-2xl font-dm-sans">
          {product}
        </h1>
        <p className=" text-gray-400 text-xs md:text-base">{price}</p>
        <p className="text-gray-400 pt-2 md:pt-5 text-sm md:text-lg font-dm-sans">
          Posted by <span className=" text-secondary">{name}</span>
        </p>
        <div className={divClass}>
          <Button className={buttonClass} child="View More" type="button" />
          <Button
            className={buttonClass2}
            child="View Contact Info"
            type="button"
            img={phoneImg}
          />
        </div>
      </div>
    </div>
  );
}
