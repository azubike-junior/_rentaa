import React from "react";

interface InputProp {
  labelName: string;
  label: string;
  className: any;
  type: string;
}

const HomeInput = ({ label, labelName, type, className }: InputProp) => {
  return (
    <div>
      <label htmlFor={label} className="py-2 my-2">
        {" "}
        {labelName}
      </label>
      <input type={type} id={label} className={className} />
    </div>
  );
};

export default HomeInput;
