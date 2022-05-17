import React from "react";
import { RootState } from "../../store/store";
import Button from "../Button";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleLogoutModal } from "../../services/Mutations/Modal";
import { deleteGadget } from "../../services/Mutations/deleteGadget";
import { useHistory } from "react-router-dom";

export default function LogoutModal() {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div className="bg-white xxs:w-72  xs:w-80 md:w-600 rounded-md px-5 py-24 md:px-20">
      <p className="xxs:text-sm text-base md:text-3xl font-dm-sans text-center pb-8 ">
        Are you sure you want Log out ?
      </p>

      <div className="flex justify-center items-center text-sm md:text-base">
        <Button
          type="button"
          child="No, cancel"
          onClick={() => dispatch(toggleLogoutModal())}
          className="xxs:text-xs bg-lightAsh text-white p-3 px-4 md:px-12 font-dm-sans mr-5"
        />
        <Button
          onClick={() => {
            localStorage.clear();
            history.push("/login");
          }}
          type="button"
          child="Yes, Log Me Out"
          className="xxs:text-xs bg-red-700 text-white p-3 px-4 md:px-12 font-dm-sans"
        />
      </div>
    </div>
  );
}  
