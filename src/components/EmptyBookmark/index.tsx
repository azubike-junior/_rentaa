import React from "react";
import bookmanGuy from "../../images/bookmarkGuy.svg";
import Button from "../Button";

export default function EmptyBookmark() {
  return (
    <div className="text-center mt-36 lg:mb-10">
      <h1 className="text-xl md:text-3xl font-dm-sans pb-2">
        Sorry, you don’t have any bookmarks.{" "}
      </h1>
      <h1 className="text-xl md:text-3xl font-dm-sans ">
        Try adding some, it’s fun
      </h1>

      <img src={bookmanGuy} className="mx-auto pt-4" alt="" />

      <Button
        child="Go to Homepage"
        className="py-5 bg-secondary px-8 my-20 text-white font-dm-sans"
        type="button"
      />
    </div>
  );
}
