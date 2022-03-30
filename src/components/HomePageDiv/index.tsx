import React from "react";

interface HomepageProp {
  number: string;
  text: string;
}
const HompageDiv = ({ number, text }: HomepageProp) => {
  return (
    <>
      <section className="flex justify-between items-center gap-3 p-3">
        <div className="basis-1/3 text-2xl">{number}</div>
        <div className="basis-2/3 text-xs text">{text}</div>
      </section>
      <hr className="w-10/12 h-0.5 bg-black mb-3 mx-auto px-3" />
    </>
  );
};

export default HompageDiv;
