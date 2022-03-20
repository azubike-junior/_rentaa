import React from "react";
import SingleBookMark from "./../../components/SingleBookMark/index";
import bookImg from "../../images/bookmarkImg.svg";
import bookImg2 from "../../images/bookmarkImg2.svg";
import searchIcon from "../../images/searchIcon.svg";
import EmptyBookmark from "./../../components/EmptyBookmark/index";

const bookmark = true;

export default function Bookmark() {
  return (
    <>
      <div className=" flex bg-primary md:w-96 lg:w-700 rounded-full py-4 md:hidden mt-10 mx-5 px-4">
        <img
          src={searchIcon}
          className="w-10 h-5 md:h-6 mt-2 md:pl-3 flex items-center justify-center"
          alt="search"
        />
        <input
          className="px-2 md:px-6 py-2 bg-transparent text-sm md:text-base flex-1 outline-none"
          type="text"
          placeholder="Search for Gadgets and  Locations around you"
        />
      </div>
      {bookmark ? (
        <div className="max-w-7xl px-4 mx-auto pl-5 md:px-5 lg:pl-10 my-20">
          <h1 className="text-xl md:text-3xl font-dm-sans">Your Bookmarks</h1>
          <p className="font-dm-sans text-sm md:text-base pt-2">
            All bookmarks are automatically removed after 21 days
          </p>

          <div className=" md:mt-14 mb-20">
            <SingleBookMark
              img={bookImg}
              imgClass="xxs:pb-2 xs:mr-6 w-40 h-44 md:w-60 md:h-60 lg:w-72 lg:h-72 md:pr-10"
              price="#20,000/week"
              name="Olaotan Faji"
              product="Canon 5D Mark IV"
              divClass="block md:flex flex-row pt-4 md xxs: place-items-center md:pt-5 lg:pt-12 font-dm-sans"
              buttonClass="xs:mx-auto bg-secondary mb-3 md:mb-0 text-xs md:text-base py-2 md:py-4 text-white px-4 md:px-6 mr-6"
              buttonClass2="px-2 xs:px-2 border-2 text-xs md:text-base border-secondary py-1.5 md:py-3.5 md:px-3 text-secondary "
            />

            <SingleBookMark
              img={bookImg2}
              imgClass="xxs:pb-2 xs:mr-6 w-40 h-44 md:w-60 md:h-60 lg:w-72 lg:h-72 md:pr-10"
              price="#20,000/week"
              name="Blessing kamar"
              product="Canon 5D Mark IV"
              divClass="block md:flex flex-row pt-4 md place-items-center md:pt-5 lg:pt-12 font-dm-sans"
              buttonClass="xs:mx-auto bg-secondary mb-3 md:mb-0 text-xs md:text-base py-2 md:py-4 text-white px-4 md:px-6 mr-6"
              buttonClass2="px-2 xs:px-2 border-2 text-xs md:text-base  border-secondary py-1.5 md:py-3.5 md:px-3 text-secondary "
            />
          </div>
        </div>
      ) : (
        <EmptyBookmark />
      )}{" "}
    </>
  );
}
