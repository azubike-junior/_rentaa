import React from "react";
import gadgetImg from "../../images/soundEquipment.png";
import Button from "../Button";
import Modal from "./../Modal/index";

type ProfileHeaderProps = {
  toggleContactModal?: any;
  toggleEditModal?: any;
  toggleReviewModal?: any;
};

const user = true;

export default function ProfileHeader({
  toggleContactModal,
  toggleEditModal,
  toggleReviewModal,
}: ProfileHeaderProps) {
  return (
    <div className="px-6 max-w-7xl my-16 mx-auto">
      <div className="md:flex">
        <div className="md:pr-8 pb-2 ">
          <img
            src={gadgetImg}
            alt=""
            className=" w-28 h-28 md:w-40 md:h-40 rounded-full mx-auto md:mx-0"
          />
        </div>
        <div>
          <h1 className="text-base md:text-xl font-dm-sans pb-2 text-center md:text-left">
            Daniel Segun
          </h1>
          <p className="text-base text-center md:text-left font-dm-sans mb-4">
            Alimosho, Lagos
          </p>

          <p className="text-sm text-center md:text-left font-dm-sans pb-1">
            Currently based in Lagos, Nigeria. Videographer and Cinematographer
          </p>
          <p className="text-sm text-center md:text-left font-dm-sans">
            Currently renting out a Canon 5D Mark IV, a Canon 1DX Mark II and a
            Canon 100mm f/2.8L IS
          </p>
          <div className="xxs:grid xs:flex sm:flex pt-3 md:pt-7 justify-center items-center md:justify-start md:items-start ">
            <Button
              child="View Contact Info"
              className=" bg-secondary mt-3 md:mt-0 text-xs md:text-sm lg:text-base mb-3 px-6 py-4 mr-3 text-white"
              type="button"
              onClick={toggleContactModal}
            />

            {user ? (
              <Button
                child="Edit Profile"
                className="px-10 border-2 border-secondary text-xs md:text-sm lg:text-base text-secondary sm:px-9 py-3.5"
                type="button"
                onClick={toggleEditModal}
              />
            ) : (
              <Button
                child="Post Review"
                className="border-2 border-secondary text-xs md:text-sm lg:text-base text-secondary px-9 py-3.5"
                type="button"
                onClick={toggleReviewModal}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
