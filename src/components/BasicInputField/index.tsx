import React from "react";
import { classNames } from "../../utils/classNames";
import eye from "../../images/eye.svg";
import arrowDown from "../../images/arrow-down.svg";

type HookInputProps = {
  label?: string;
  placeholder?: string;
  info?: string;
  value?: string;
  className?: string;
  required?: boolean;
  errors?: any;
  name?: string;
  type?: string;
  show?: boolean;
  select?: boolean;
  textArea?: boolean;
  textAreaClass?: any;
  disabled?: boolean
};

export function HookInput({
  label,
  info,
  placeholder,
  required,
  className = "",
  select,
  errors,
  name,
  show,
  type = "text",
  textArea,
  textAreaClass,
  disabled,
  value
}: HookInputProps) {
  return (
    <div className={className}>
      <div className="flex flex-col  w-full">
        <label
          className="mb-2 text-xs md:text-base text-secondary-blue font-dm-sans"
          htmlFor={name}
        >
          {label} {required && <span className=" ml-1 text-red-600">*</span>}
        </label>
        <div
          className={classNames(
            disabled
              ? "px-0 border-0 "
              : "flex justify-center border-2 border-gray-200 px-4 rounded"
          )}
        >
          {textArea ? (
            <textarea
              value={value}
              className={classNames(
                !errors && "focus:border-primary-blue",
                errors && "border-red-500 focus:border-red-500",
                disabled && " bg-lightCream w-full px-6",
                textAreaClass && textAreaClass,
                "py-3 text-sm md:text-base md:px-4 w-full focus:outline-none font-dm-sans"
              )}
            />
          ) : (
            <input
              className={classNames(
                !errors && "focus:border-primary-blue",
                errors && "border-red-500 focus:border-red-500",
                disabled && " bg-lightCream w-full px-6",
                "py-1 h-10 text-sm md:h-14 md:text-base md:px-2 w-full rounded-lg focus:outline-none font-dm-sans"
              )}
              id={name}
              type={type}
              value={value}
              placeholder={placeholder}
              name={name}
              disabled={disabled}
            />
          )}
          <div className="mt-3 lg:mt-5 mr-1">
            {show && <img src={eye} className="w-4 h-4" alt="" />}
            {select && <img src={arrowDown} className="w-4 h-4" alt="" />}
          </div>
        </div>
      </div>
    </div>
  );
}
