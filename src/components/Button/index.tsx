import { classNames } from "./../../utils/classNames";
import React from "react";

interface ButtonProp {
  child: string;
  className: string;
  type: "button" | "submit";
}

export default function Button({ child, type, className }: ButtonProp) {
  return (
    <div className="flex justify-center w-full mt-4  capitalize">
      <button
        className={classNames(className && className, "rounded-sm capitalize font-dm-sans")}
        type={type}
      >
        {child}
      </button>
    </div>
  );
}
