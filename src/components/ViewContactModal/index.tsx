import React, { useState } from "react";
import closeIcon from "../../images/closeIcon.svg";
import linkIcon from "../../images/linkIcon.svg";
import copyIcon from "../../images/copyIcon.svg";
import { useDispatch } from "react-redux";
import { toggleContactModal } from "../../services/Mutations/Modal";
import { Link } from "react-router-dom";
import { classNames } from "../../utils/classNames";
import { IContact } from "../../services/Queries/findUserContact";

type CopyProps = {
  title: string;
  input?: string;
  img?: boolean;
  img2?: boolean;
  onClick?: any;
  link: string;
  classname?: string;
};

type ViewContactProps = {
  openContactModal?: any;
};

export function CopyField({
  title,
  input,
  img,
  img2,
  onClick,
  link,
  classname,
}: CopyProps) {
  return (
    <div className="text-black py-4">
      <p className="pb-2 text-sm md:text-base">{title}</p>
      <div className="w-full flex py-4 px-4 md:px-7 justify-between bg-lightCream rounded">
        <input
          value={input}
          className="w-full bg-lightCream text-xs md:text-base"
          disabled
        />
        {/* <p className="text-xs md:text-sm">{input}</p> */}
        <div className="flex">
          {img && (
            <a href={link} target="_blank">
              <img
                src={linkIcon}
                className="w-3 md:w-4 mr-3 md:mr-4 cursor-pointer"
                alt=""
              />
            </a>
          )}
          {img2 && (
            <img
              src={copyIcon}
              onClick={onClick}
              className={classNames(
                classname && classname,
                "w-3 md:w-4 cursor-pointer hover:translate-x-9 hover:translate-y-12"
              )}
              alt=""
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default function ViewContactModal({
  phone_number,
  twitter,
  instagram,
}: IContact) {
  const [isCopied, setIsCopied] = useState({
    noCopied: false,
    igCopied: false,
    twitCopied: false,
  });

  const copy = async (text: string, copiedString: string) => {
    if (copiedString == "noCopied") {
      await navigator.clipboard.writeText(text);
      setIsCopied({ ...isCopied, noCopied: true });
    } else if (copiedString == "igCopied") {
      await navigator.clipboard.writeText(text);
      return setIsCopied({ ...isCopied, igCopied: true });
    } else if (copiedString === "twitCopied") {
      await navigator.clipboard.writeText(text);
      return setIsCopied({ ...isCopied, twitCopied: true });
    }
    setIsCopied({
      ...isCopied,
      noCopied: false,
      igCopied: false,
      twitCopied: false,
    });
  };

  const [text, setText] = useState({
    number: "0906374848",
    IG: "www.instagram.com/d.a.n_j",
    twit: "www.twitter.com/adejorodaniel/",
  });
  const inputHandler = (e: any) => {
    setText(e.target.value);
  };
  const dispatch = useDispatch();

  return (
    <div className="xxs:w-72 xs:w-96 xs:mx-4 font-dm-sans bg-white  text-white rounded-lg">
      <div className="md:w-700 flex items-center justify-between bg-secondary h-16 md:h-20 px-5 rounded-t md:rounded-t-lg">
        <p className="text-base=">View Contact Info</p>
        <img
          src={closeIcon}
          className="w-5 cursor-pointer"
          alt=""
          onClick={() => dispatch(toggleContactModal())}
        />
      </div>

      <div className="py-7 px-4 md:px-7">
        <CopyField
          title="Copy “Phone Number”"
          input={phone_number}
          onClick={() => copy(phone_number, "noCopied")}
          img2
          classname={isCopied.noCopied ? " w-10" : ""}
          link={""}
        />
        <CopyField
          title="Copy “Instagram”"
          input={instagram}
          onClick={() => copy(instagram, "igCopied")}
          img
          classname={isCopied.igCopied ? " w-7" : " bg-none"}
          img2
          link={`https://${instagram}`}
        />
        <CopyField
          title="Copy “Twitter”"
          input={twitter}
          classname={isCopied.twitCopied ? "" : ""}
          img
          img2
          onClick={() => copy(text.twit, "twitCopied")}
          link={`https://${twitter}`}
        />
      </div>
    </div>
  );
}
