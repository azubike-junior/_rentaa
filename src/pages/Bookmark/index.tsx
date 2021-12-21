import React from "react";
import SingleBookMark from "./../../components/SingleBookMark/index";
import bookImg from "../../images/bookmarkImg.svg";
import bookImg2 from "../../images/bookmarkImg2.svg";
import searchIcon from "../../images/searchIcon.svg";


export default function Bookmark() {
  return (
    <>
      <div className=" flex bg-primary md:w-96 lg:w-700 rounded-full py-4 md:hidden mt-10 mx-5 px-4">
        <img
          src={searchIcon}
          className="w-10 h-6 mt-2 pl-3 flex items-center justify-center"
          alt="search"
        />
        <input
          className="px-6 py-2 bg-transparent flex-1 outline-none"
          type="text"
          placeholder="Search for Gadgets and  Locations around you"
        />
      </div>
      <div className="max-w-7xl mx-auto pl-5 md:px-5 lg:pl-10 my-20">
        <h1 className="text-xl md:text-3xl font-dm-sans">Your Bookmarks</h1>
        <p className="font-dm-sans text-sm md:text-base pt-2">
          All bookmarks are automatically removed after 21 days
        </p>

        <div className=" md:mt-14 mb-20">
          <SingleBookMark
            img={bookImg}
            price="#20,000/week"
            name="Olaotan Faji"
            product="Canon 5D Mark IV"
          />

          <SingleBookMark
            img={bookImg2}
            price="#20,000/week"
            name="Blessing kamar"
            product="Canon 5D Mark IV"
          />
        </div>
      </div>
    </>
  );
}
