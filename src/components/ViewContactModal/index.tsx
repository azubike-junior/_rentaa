import React from "react";
import closeIcon from "../../images/closeIcon.svg";
import linkIcon from "../../images/linkIcon.svg";
import copyIcon from "../../images/copyIcon.svg";

type CopyProps = {
  title: string;
  input: string;
  img?: boolean;
  img2?: boolean;
};

type ViewContactProps = {
  openContactModal?: any;
};

export function CopyField({ title, input, img, img2 }: CopyProps) {
  return (
    <div className="text-black py-4">
      <p className="pb-2 text-sm md:text-base">{title}</p>
      <div className="w-full flex py-4 px-4 md:px-7 justify-between bg-lightCream rounded">
        <p className="text-xs md:text-sm">{input}</p>
        <div className="flex">
          {img && (
            <img src={linkIcon} className="w-3 md:w-4 mr-3 md:mr-4" alt="" />
          )}
          {img2 && <img src={copyIcon} className=" w-3 md:w-4" alt="" />}
        </div>
      </div>
    </div>
  );
}

export default function ViewContactModal({ toggleContactModal }: any) {
  return (
    <div className="xxs:w-72 font-dm-sans bg-white  text-white rounded-lg">
      <div className="md:w-700 flex items-center justify-between bg-secondary h-16 md:h-20 px-5 rounded-t md:rounded-t-lg">
        <p className="text-base=">View Contact Info</p>
        <img
          src={closeIcon}
          className="w-5 cursor-pointer"
          alt=""
          onClick={toggleContactModal}
        />
      </div>

      <div className="py-7 px-4 md:px-7">
        <CopyField title="Copy “Phone Number”" input="081 881 10934" img2 />

        <CopyField
          title="Copy “Instagram”"
          input="www.instagram.com/d.a.n_j"
          img
          img2
        />

        <CopyField
          title="Copy “Twitter”"
          input="www.twitter.com/adejorodaniel/"
          img
          img2
        />
      </div>
    </div>
  );
}
