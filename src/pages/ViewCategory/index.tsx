import React from "react";
import SingleBookMark from "../../components/SingleBookMark";
import bookImg from "../../images/bookmarkImg.svg";
import bookImg2 from "../../images/bookmarkImg2.svg";

export default function ViewCategory() {
  return (
    <div className="py-16 mx-auto max-w-7xl px-5">
      <h1 className="text-3xl font-dm-sans">Cameras</h1>
      <div className="block xl:grid xl:grid-flow-row gap-x-14 grid-cols-2">
        <SingleBookMark
          img={bookImg}
          price="#20,000/week"
          imgClass="xxs:pb-2 w-40 mr-2 md:w-52 md:h-52 md:pr-4"
          name="Olaotan Faji"
          product="Canon 5D Mark IV"
          divClass="block md:flex flex-row pt-4 md xxs: place-items-center:pt-9 font-dm-sans"
          buttonClass="bg-secondary mb-3 md:mb-0 text-sm md:text-base py-2 md:py-4 text-white px-4 md:px-6 mr-6"
          buttonClass2="border-2 text-sm md:text-base border-secondary py-2 md:py-3.5 text-secondary px-6 xs:px-3"
        />

        <SingleBookMark
          img={bookImg}
          price="#20,000/week"
          imgClass="xxs:pb-2 w-40 mr-2 md:w-52 md:h-52 md:pr-4"
          name="Olaotan Faji"
          product="Canon 5D Mark IV"
          divClass="block md:flex flex-row pt-4 md xxs: place-items-center:pt-9 font-dm-sans"
          buttonClass="bg-secondary mb-3 md:mb-0 text-sm md:text-base py-2 md:py-4 text-white px-4 md:px-6 mr-6"
          buttonClass2="border-2 text-sm md:text-base border-secondary py-2 md:py-3.5 text-secondary px-6 xs:px-3"
        />

        <SingleBookMark
          img={bookImg}
          price="#20,000/week"
          imgClass="xxs:pb-2 w-40 mr-2 md:w-52 md:h-52 md:pr-4"
          name="Olaotan Faji"
          product="Canon 5D Mark IV"
          divClass="block md:flex flex-row pt-4 md xxs: place-items-center:pt-9 font-dm-sans"
          buttonClass="bg-secondary mb-3 md:mb-0 text-sm md:text-base py-2 md:py-4 text-white px-4 md:px-6 mr-6"
          buttonClass2="border-2 text-sm md:text-base border-secondary py-2 md:py-3.5 text-secondary px-6 xs:px-3"
        />

        <SingleBookMark
          img={bookImg}
          price="#20,000/week"
          imgClass="xxs:pb-2 w-40 mr-2 md:w-52 md:h-52 md:pr-4"
          name="Olaotan Faji"
          product="Canon 5D Mark IV"
          divClass="block md:flex flex-row pt-4 md xxs: place-items-center:pt-9 font-dm-sans"
          buttonClass="bg-secondary mb-3 md:mb-0 text-sm md:text-base py-2 md:py-4 text-white px-4 md:px-6 mr-6"
          buttonClass2="border-2 text-sm md:text-base border-secondary py-2 md:py-3.5 text-secondary px-6 xs:px-3"
        />
      </div>
    </div>
  );
}
