import { classNames } from "./../../utils/classNames";
import React from "react";

interface ButtonProp {
  child: string;
  className: any;
  type: "button" | "submit";
  img?: string
}

export default function Button({ child, type, className, img}: ButtonProp) {
  return (
    <div className="capitalize">
      <button
        className={classNames(
          className && className,
          "rounded capitalize font-dm-sans"
        )}
        type={type}
      >
        <div className="flex justify-center items-center">
          {img && <img src={img} className="xs:hidden pr-3"/>} {child}
        </div>
      </button>
    </div>
  );
}
