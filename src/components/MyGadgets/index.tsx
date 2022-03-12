import React from "react";
import gadgetImg from "../../images/myGadgetImg.svg";
import gadget from "../../images/soundEquipment.png";
import EmptyGadgetSection from "../EmptyGadgetSection";
import Loader from "./../Loader/index";

function SingleGadget({ img }: any) {
  return <img src={img} className=" w-72 h-48 rounded-lg" alt="name" />;
}

export default function MyGadgets({ gadgets, gadgetLoading }: any) {
  return (
    <>
      {gadgetLoading ? (
        <Loader />
      ) : (
        <div className="container max-w-7xl mx-auto px-8 py-10 my-10">
          <div className="px-0 grid xs:grid-cols-2 xs:gap-x-5 grid-flow-row md:gap-y-6 md:pb-6 md:px-0 md:gap-x-7  md:grid-cols-3 gap-y-2 lg:gap-y-7 lg:px-0 lg:grid-cols-4">
            {gadgets?.map((item: any) => {
              return <SingleGadget img={item} />;
            })}
          </div>
        </div>
      )}
    </>
  );
}
