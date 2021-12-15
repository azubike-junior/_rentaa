import React from "react";
import { classNames } from "../../utils/classNames";
import eye from "../../images/eye.svg"

type HookInputProps = {
  label?: string;
  placeholder?: string;
  info?: string;
  className?: string;
  required?: boolean;
  errors?: any;
  name: string;
  type?: string;
  show?: boolean
};


export function HookInput({
  label,
  info,
  placeholder,
  required,
  className = "",
  errors,
  name,
  show,
  type = "text",
}: HookInputProps) {
  return (
    <div className={className}>
      <div className="flex flex-col  w-full">
        <label
          className="mb-2 text-xs md:text-base text-secondary-blue font-dm-sans"
          htmlFor={name}
        >
          {label} {required && <span className="text-black ml-1">*</span>}
        </label>
        <div className="flex justify-center border-2 border-gray-200 px-4 rounded">
          <input
            className={classNames(
              !errors && "focus:border-primary-blue",
              errors && "border-red-500 focus:border-red-500",
              "py-1 h-10 text-sm md:h-14 md:text-base md:px-2 bg-opacity-0 w-full rounded-lg focus:outline-none font-dm-sans"
            )}
            id={name}
            type={type}
            placeholder={placeholder}
            name={name}
          />
          <div className="mt-3 lg:mt-5 mr-1">
            {show && <img src={eye} className="w-4 h-4" alt="" />}
          </div>
        </div>
      </div>
    </div>
  );
}
