import React from "react";
import { RootState, useAppDispatch } from "../../store/store";
import Button from "../Button";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleDeleteModal } from "../../services/Mutations/Modal";
import { deleteGadget } from "../../services/Mutations/deleteGadget";
import { useNavigate } from "react-router-dom";

interface gadgetProp {
  id?: string;
}

export default function DeleteModal({ id }: gadgetProp) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <div className="bg-white xxs:w-72  xs:w-80 md:w-600 rounded-md px-5 py-24 md:px-20">
      <p className="text-base md:text-3xl font-dm-sans text-center pb-8 ">
        Are you sure you want to delete this gadget?
      </p>

      <div className="flex justify-center items-center text-sm md:text-base">
        <Button
          type="button"
          child="No, cancel"
          onClick={() => dispatch(toggleDeleteModal())}
          className="bg-lightAsh text-white p-3 px-4 md:px-12 font-dm-sans mr-5"
        />
        <Button
          onClick={() => {
            dispatch(deleteGadget({ id, navigate, dispatch }));
          }}
          type="button"
          child="Yes, delete"
          className="bg-red-700 text-white p-3 px-4 md:px-12 font-dm-sans"
        />
      </div>
    </div>
  );
}
