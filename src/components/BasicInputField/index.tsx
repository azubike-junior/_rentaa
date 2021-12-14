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
          className="mb-2 text-secondary-blue font-semibold"
          htmlFor={name}
        >
          {label} {required && <span className="text-black ml-1">*</span>}
        </label>
        <div className="flex justify-center border border-gray-200 px-4 rounded">
          <input
            className={classNames(
              !errors && "focus:border-primary-blue",
              errors && "border-red-500 focus:border-red-500",
              "py-4 px-3 bg-opacity-0 w-full rounded-lg focus:outline-none text-sm font-lg"
            )}
            id={name}
            type={type}
            placeholder={placeholder}
            name={name}
          />
          <div className="mt-4 mr-1">
            {show && <img src={eye} className="w-4 h-4" alt="" />}
          </div>
        </div>
      </div>
    </div>
  );
}
