import React from "react";
import closeIcon from "../../images/closeIcon.svg";
import { HookInput } from "../BasicInputField";
import Button from "../Button";
import { useDispatch } from "react-redux";
import { toggleReviewModal } from "../../services/Mutations/Modal";

export default function ReviewModal() {
  const dispatch = useDispatch();
  return (
    <div className="xxs:w-72 md:w-550 lg:w-900 font-dm-sans bg-white  text-white rounded-lg">
      <div className="w-full lg:w-900 flex items-center justify-between bg-secondary h-16 md:h-20 px-6 md:px-7 lg:px-10 rounded-t md:rounded-t-lg">
        <p className="text-base=">Leave a Review</p>
        <img
          src={closeIcon}
          className="w-7 cursor-pointer"
          onClick={() => dispatch(toggleReviewModal())}
          alt=""
        />
      </div>

      <div className="py-7 px-5 lg:px-9">
        <HookInput
          label="Your Name"
          className="w-full lg:w-700 text-gray-400"
          name="name"
          value="Daniel Olodo"
          disabled
        />
        <HookInput
          label="Give a review of this user (Max. 1000 words)"
          className="w-full text-black mt-4 lg:w-700"
          textArea
          textAreaClass="h-72"
        />

        <Button
          child="Submit Review"
          className="w-full lg:w-44 text-white mt-6 text-sm md:text-base py-4 bg-secondary"
          type="button"
        />
      </div>
    </div>
  );
}
