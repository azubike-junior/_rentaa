import Button from "../../components/Button";
// import { HookInput, InputField } from "../../components/BasicInputField/index";
import { useDispatch, useSelector } from "react-redux";
import { changePassword } from "./../../services/Mutations/changePassword";
import { useState } from "react";
import { RootState } from "../../store/store";
import Loader from "./../Loader/index";
import successIcon from "../../images/passwordChangeIcon.svg";
import { AiOutlineClose } from "react-icons/ai";
import { toggleChangePasswordSuccessModal } from "../../services/Mutations/Modal";
import closeIcon from "../../images/closeIcon2.svg";

export default function ChangePasswordSuccessModal() {
  const dispatch = useDispatch();
  const { changePasswordSuccessOpen } = useSelector(
    (state: RootState) => state.modalReducer
  );

  return (
    <>
      <div className="xxs:w-72 xs:w-80 md:w-500 px-5 font-dm-sans bg-white rounded-lg">
        {/* <AiOutlineClose
          className=" mt-10 text-base md:text-2xl cursor-pointer"
          onClick={() => dispatch(toggleChangePasswordSuccessModal())}
        /> */}

        <img
          src={closeIcon}
          alt=""
          className="pt-4  ml-auto w-4 cursor-pointer"
          onClick={() => dispatch(toggleChangePasswordSuccessModal())}
        />

        <div className="w-full py-10 text-center px-5 ">
          <p>Your password has been successfully changed</p>
          <img src={successIcon} alt="" className="pt-4 mx-auto w-5" />
        </div>
      </div>
    </>
  );
}
