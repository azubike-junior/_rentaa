import React from "react";
import { Link } from "react-router-dom";
import gadgetImg from "../../images/myGadgetImg.svg";
import gadget from "../../images/soundEquipment.png";
import EmptyGadgetSection from "../EmptyGadgetSection";
import Loader from "./../Loader/index";

function SingleGadget({ img, id }: any) {
  return (
    <Link to={`/product_description/${id}`}>
      <div className="border rounded ">
        <img
          src={img}
          className=" w-64 h-40 xs:w-52 xs:h-36 md:w-72 md:h-48 rounded-lg"
          alt="name"
        />
      </div>
    </Link>
  );
}

export default function MyGadgets({ gadgets, gadgetLoading }: any) {
  return (
    <>
      {gadgetLoading ? (
        <Loader />
      ) : (
        <div className="container max-w-7xl mx-auto px-8 py-10 my-4">
          <div className="px-0 grid gap-y-8 xs:grid-cols-2 xs:gap-y-9 xs:gap-x-5 grid-flow-row md:gap-y-6 md:pb-6 md:px-0 md:gap-x-7  md:grid-cols-3 lg:gap-y-7 lg:px-0 lg:grid-cols-4">
            {gadgets?.map((item: any) => {
              // console.log(">>>>item", item);
              return <SingleGadget img={item.image} id={item.id} />;
            })}
          </div>
        </div>
      )}
    </>
  );
}
