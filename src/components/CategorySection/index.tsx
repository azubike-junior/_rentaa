import Button from "../Button";
import Category from "../Category";
import "../../assets/homeGrid.css";
import { Link } from "react-router-dom";
import camera from "../../images/camera-2.svg";
import sound from "../../images/sound-2.svg";
import laptop from "../../images/laptop.svg";
import game from "../../images/game-2.svg";
import apple from "../../images/applePc.svg";
import projector from "../../images/projector.svg";
import drone from "../../images/drone2.svg";
import airpod from "../../images/airpod.svg";
import phone from "../../images/phone2.svg";
import { useEffect, useState } from "react";

const images = [
  drone,
  camera,
  airpod,
  sound,
  projector,
  apple,
  game,
  laptop,
  phone,
];

interface ICategoriesData {
  categories: any;
}
export default function CategorySection({ categories }: ICategoriesData) {

  let photoCategories = [];
  let allImages = "";

  // iterating through the categories and appending image to each object in the categories array
  // created a new object from the existing array of objects in the category {id, name, image}

  for (let i = 0; i < categories?.length; i++) {
    for (let j = 0; j < images.length; j++) {
      allImages = images[i];
    }
    photoCategories.push({
      id: categories[i].id,
      name: categories[i].name,
      image: allImages,
    });
  }
  // console.log(photoCategories);

  return (
    <div className="max-w-7xl px-8 mx-auto font-dm-sans text-center mt-10 md:pb-24 md:my-20 ">
      <h1 className="text-left xs:text-base sm:text-xl font-medium  md:text-3xl py-7">
        Browse Product Categories
      </h1>
      {/* <div className="gridContainer flex-wrap"> */}
      <div className="grid xxs:gap-x-10 xxs:grid-cols-2 xs:grid-cols-2 justify-items-center xxs:place-items-center sm:gap-6 sm:grid-cols-2 md:grid-cols-3 md:pl-3 md:gap-16 grid-flow-row lg:gap-10 lg:grid-cols-4 xl:pl-5 xl:grid-cols-6">
        {photoCategories?.map((category: any) => {
          // console.log(category);
          return (
            <Link to={`/view_categories/${category.id}`}>
              <Category
                imageUrl={category.image}
                categoryName={category?.name}
              />
            </Link>
          );
        })}
      </div>
      <h2 className="xs:text-base sm:text-lg md:text-2xl mt-10">
        Want to post a gadget for rent?
      </h2>

      <Link to="/post_product">
        <Button
          child="List Gadgets for rent"
          type="button"
          className="xxs:w-44 xs:px-4 xxs:text-sm md:w-500 bg-secondary mb-8 mt-6 md:mt-9 py-5 md:py-7 font-dm-sans md:text-lg text-white rounded"
        />
      </Link>
    </div>
  );
}

export {};
