import React, { useState } from "react";
import closeIcon from "../../images/closeIcon.svg";
import { HookInput } from "../BasicInputField";
import Button from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { toggleReviewModal } from "../../services/Mutations/Modal";
import { useForm } from "react-hook-form";
import { InputField } from "./../BasicInputField/index";
import { leaveReview } from "./../../services/Mutations/leaveReview";
import { RootState } from "../../store/store";
import Loader from "./../Loader/index";

export default function ReviewModal({ id }: any) {
  const first_name = localStorage.getItem("first_name");
  const last_name = localStorage.getItem("last_name");
  const [image, setImage] = useState("");

  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const userData = JSON.parse(localStorage.getItem("userData") || "");

  const { loading: reviewsLoading } = useSelector(
    (state: RootState) => state.leaveReviewReducer
  );

  const handleReviewSubmit = (data: any) => {
    const rev = {
      reviewer: `${userData.first_name} ${userData.last_name}`,
      review: data.review,
    };
    const newData = {
      data: rev,
      id,
      dispatch,
      setImage,
    };
    dispatch(leaveReview(newData));
  };

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

      <form
        className="py-7 px-5 lg:px-9"
        onSubmit={handleSubmit(handleReviewSubmit)}
      >
        <InputField
          register={register}
          label="Your Name"
          name="reviewerName"
          className="w-full lg:w-700 text-gray-400"
          value={`${userData.first_name} ${userData.last_name}`}
          disabled
        />
        <InputField
          register={register}
          label="Give a review of this user (Max. 1000 words)"
          className="w-full text-black mt-4 lg:w-700"
          textArea
          required
          name="review"
          // errors={errors?.review}
          textAreaClass="h-72"
        />

        <Button
          child={reviewsLoading ? <Loader /> : "Submit Review"}
          type="submit"
          className="w-full lg:w-44 text-white mt-6 text-sm md:text-base py-4 bg-secondary"
        />
      </form>
    </div>
  );
}
