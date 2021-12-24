import React from "react";
import { HookInput } from "../../components/BasicInputField";
import Button from "../../components/Button";
import addPhoto from "../../images/addPhoto.svg";
import uploadPhoto from "../../images/photoUpload.svg";

export default function PostProduct() {
  return (
    <div className="mx-auto font-dm-sans max-w-7xl my-20 px-4">
      <div className="mt-10">
        <h1 className="text-lg md:text-3xl pb-2 text-center">Post Product</h1>
        <p className="text-xs md:text-base text-center font-extralight">
          Fill the forms with Gadget Information, Details and Product specs. Be
          sure to remain honest and transparent
        </p>

        <div className="w-full flex items-center justify-center ">
          <div className="flex flex-col items-start ">
            <div className=" w-full px-3">
              <HookInput
                label="Product Category"
                className="lg:w-700 pt-12"
                name="email"
                required
                select
              />
              <HookInput
                label="Current State of Residence"
                className="lg:w-700 pt-12"
                name="email"
                required
                select
              />
              <HookInput
                label="LGA"
                className="lg:w-700 pt-12"
                name="email"
                select
                required
              />
              <HookInput
                label="Gadget Name"
                className="lg:w-700 pt-12"
                name="email"
                required
              />
              <HookInput
                label="Gadget Condition"
                className="lg:w-700 pt-12"
                name="email"
                required
              />
              <HookInput
                label="Description"
                className="lg:w-700 pt-12  "
                textAreaClass="md:h-96  h-36 rounded-lg"
                name="email"
                textArea
              />
              <HookInput
                label="Price/Week"
                className="lg:w-700 pt-12"
                name="email"
              />
              <HookInput
                label="Contact Information"
                className="lg:w-700 pt-12"
                name="email"
                required
              />

              <p className="text-sm pt-7 md:text-base">
                Add Gadget Photo <span className=" ml-1 text-red-600">*</span>
              </p>
              <p className="text-xs text-gray-300 md:text-sm pt-1">
                Each picture must not be larger than 6MB. We recommend you
                upload between 3-5 pictures
              </p>

              <div className="pt-4 flex">
                <img
                  src={addPhoto}
                  alt=""
                  className="w-20 md:w-28 pr-4 md:pr-6"
                />
                <img src={uploadPhoto} alt="" className="w-16 md:w-20" />
              </div>
              <p className="text-xs text-gray-300 md:text-sm pt-5">
                Supported formats; .jpg, .png
              </p>

              <Button
                child="Submit"
                type="submit"
                className="w-full bg-secondary mt-10 py-3 md:py-8 font-dm-sans md:text-lg text-white rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
