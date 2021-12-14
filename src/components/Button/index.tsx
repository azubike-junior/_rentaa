import { classNames } from "./../../utils/classNames";
import React from "react";

interface ButtonProp {
  child: string;
  className: string;
  type: "button" | "submit";
}

export default function Button({ child, type, className }: ButtonProp) {
  return (
    <div className="capitalize">
      <button
        className={classNames(
          className && className,
          "rounded-sm capitalize font-dm-sans"
        )}
        type={type}
      >
        {child}
      </button>
      
      {/* <HookInput show type="text" label="First Name" name="firstName" />

      <Button
        child="sign up"
        type="submit"
        className="w-full py-7 bg-secondary font-sans text-white rounded"
      /> */}
    </div>
  );
}
