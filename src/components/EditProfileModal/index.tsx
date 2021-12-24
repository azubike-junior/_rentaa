import React from "react";
import gadgetImg from "../../images/soundEquipment.png";
import { HookInput } from "../BasicInputField";
import Button from "../Button";

export default function EditProfileModal({ toggleEditModal }: any) {
  return (
    <div className="xxs:w-72 mx-4 h-700 md:h-700 md:w-600 lg:h-700 lg:w-900 xl:w-1000 font-dm-sans bg-white  text-white rounded-lg px-4 md:p-10 overflow-y-scroll shadow-2xl">
      <div className="block lg:flex lg:space-x-28 w-full pt-7">
        <div className="pb-2 md:mx-auto lg:mx-0">
          <img
            src={gadgetImg}
            alt=""
            className=" w-28 h-28 md:h-40 md:w-40 lg:w-48 lg:h-48 rounded-full mx-auto lg:mx-0"
          />
          <p className="text-gray-400 text-base mt-4 text-center lg:text-left pb-3">
            Change Profile Picture
          </p>
        </div>
        <div className="font-dm-sans text-black lg:w-500 xl:w-700">
          <h1 className="hidden md:block md:text-2xl lg:text-4xl pb-7">
            Edit Profile
          </h1>
          <div className="w-full ">
            <div className="block md:flex justify-between">
              <HookInput
                label="First Name"
                className="w-full pb-4 md:pr-7 "
                name="email"
              />
              <HookInput label="First Name" className="w-full " name="email" />
            </div>
            <HookInput
              label="First Name"
              className="w-full pt-5"
              name="email"
            />
            <HookInput
              label="First Name"
              className="w-full pt-5"
              name="email"
            />
            <HookInput
              label="Description "
              className="xl:w-700  pt-7 text-xs md:text-base rounded-none "
              textAreaClass="md:h-96 px-4  text-xs md:text-base text-gray-400 h-36 bg-darkCream "
              name="email"
              disabled
              value="Currently based in Lagos, Nigeria. Videographer and Cinematographer. Currently renting out a Canon 5D Mark IV, a  Canon 1DX Mark II and a Canon 100mm f/2.8L IS"
              textArea
            />

            <Button
              child="Save"
              className="w-full lg:w-52 py-3 md:py-5 text-white mt-3 md:mt-5 mb-10 bg-secondary"
              type="submit"
              onClick={toggleEditModal}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
