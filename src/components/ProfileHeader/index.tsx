import React from "react";
import gadgetImg from "../../images/soundEquipment.png";
import Button from "../Button";
import Modal from "./../Modal/index";

type ProfileHeaderProps = {
  toggleContactModal?: any;
  toggleEditModal?: any;
  toggleReviewModal?: any;
};

const user = false;

export default function ProfileHeader({
  toggleContactModal,
  toggleEditModal,
  toggleReviewModal,
}: ProfileHeaderProps) {
  return (
    <div className="px-6 max-w-7xl my-20 mx-auto">
      <div className="md:flex">
        <div className="pr-8 pb-2">
          <img
            src={gadgetImg}
            alt=""
            className=" w-28 h-28 md:w-40 md:h-40 rounded-full"
          />
        </div>
        <div>
          <h1 className="text-xl font-dm-sans pb-2">Daniel Segun</h1>
          <p className="text-base font-dm-sans mb-4">Alimosho, Lagos</p>

          <p className="text-sm font-dm-sans pb-1">
            Currently based in Lagos, Nigeria. Videographer and Cinematographer
          </p>
          <p className="text-sm font-dm-sans">
            Currently renting out a Canon 5D Mark IV, a Canon 1DX Mark II and a
            Canon 100mm f/2.8L IS
          </p>
          <div className="xs:flex sm:flex pt-7">
            <Button
              child="View Contact Info"
              className=" bg-secondary mb-3 px-6 py-4 mr-3 text-white"
              type="button"
              onClick={toggleContactModal}
            />

            {user ? (
              <Button
                child="Edit Profile"
                className="border-2 border-secondary text-secondary px-9 py-3.5"
                type="button"
                onClick={toggleEditModal}
              />
            ) : (
              <Button
                child="Post Review"
                className="border-2 border-secondary text-secondary px-9 py-3.5"
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
