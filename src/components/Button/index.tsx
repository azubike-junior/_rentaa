import { classNames } from "./../../utils/classNames";
import React from "react";

interface ButtonProp {
  child: any;
  className: any;
  type: "button" | "submit";
  img?: string;
  onClick?: any;
}

export default function Button({
  child,
  type,
  className,
  img,
  onClick,
}: ButtonProp) {
  return (
    <div className="capitalize" onClick={onClick}>
      <button
        className={classNames(
          className && className,
          "rounded capitalize font-dm-sans"
        )}
        type={type}
      >
        <div className="flex justify-center items-center">
          {img && <img src={img} className="xs:hidden  pr-3" />} {child}
        </div>
      </button>
    </div>
  );
}
