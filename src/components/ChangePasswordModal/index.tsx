import Button from "../../components/Button";
// import { HookInput, InputField } from "../../components/BasicInputField/index";
import FormTitle from "../../components/FormTitle/index";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import { InputField } from "./../BasicInputField/index";
import { useForm } from "react-hook-form";
import { AiOutlineClose } from "react-icons/ai";
import { toggleChangePasswordModal } from "../../services/Mutations/Modal";
import { useDispatch, useSelector } from "react-redux";
import { changePassword } from "./../../services/Mutations/changePassword";
import { useState } from "react";
import { RootState } from "../../store/store";
import Loader from './../Loader/index';

export default function ChangePasswordModal() {
  const [newPasswordEye, setNewPasswordEye] = useState(false);
  const [oldPasswordEye, setOldPasswordEye] = useState(false);
  const [confirmPasswordEye, setConfirmPasswordEye] = useState(false);

  const {data: changePasswordData, loading, error} = useSelector((state: RootState) => state.changePasswordReducer)

  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    getValues,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const handleChangePasswordSubmit = (data: any) => {
    const passwordData = {
      old_password: data.oldPassword,
      new_password: data.newPassword,
    };

    const newData = {
      data: passwordData,
      dispatch,
    };

    dispatch(changePassword(newData));
  };

  const password = watch("newPassword");

  const handleOldPasswordClick = () => {
    setOldPasswordEye(!oldPasswordEye);
  };

  const handleNewPasswordClick = () => {
    setNewPasswordEye(!newPasswordEye);
  };

  const handleConfirmPasswordClick = () => {
    setConfirmPasswordEye(!confirmPasswordEye);
  };

  return (
    <>
      <div className="xxs:w-72 xs:w-80 md:w-600 lg:w-900 font-dm-sans bg-white rounded-lg">
        <div className="w-full pt-7 py-10 my-12 lg:mt-24 flex items-center justify-center ">
          <div className="flex flex-col items-start ">
            <form
              className="pt-12 w-full px-3 md:w-500 xl:w-700"
              onSubmit={handleSubmit(handleChangePasswordSubmit)}
            >
              <div className="flex justify-between">
                <p className="text-base md:text-2xl font-medium">
                  Change Password
                </p>

                <AiOutlineClose
                  className="mt-1 md:pt-0 text-base md:text-2xl cursor-pointer"
                  onClick={() => dispatch(toggleChangePasswordModal())}
                />
              </div>
              {error?.message && <p className="text-red-700 text-xs pt-2 md:text-base">{error?.message}</p>}
              <InputField
                label="Old Password"
                className="w-full pt-5"
                name="oldPassword"
                register={register}
                type={oldPasswordEye ? "text" : "password"}
                show
                required
                errors={errors?.oldPassword}
                onClick={handleOldPasswordClick}
                message="required"
              />
              <InputField
                label="New Password"
                className="w-full pt-5"
                name="newPassword"
                show
                register={register}
                required
                type={newPasswordEye ? "text" : "password"}
                errors={errors?.newPassword}
                message="required"
                onClick={handleNewPasswordClick}
              />
              <InputField
                label="Confirm Password"
                className="w-full pt-5"
                name="confirmPassword"
                show
                onClick={handleConfirmPasswordClick}
                register={register}
                required
                errors={errors?.confirmPassword}
                message="Password do not match"
                password={password}
                validate={(value: any) =>
                  value === password || "Password do not match"
                }
                type={confirmPasswordEye ? "text" : "password"}
              />

              <Button
                child={loading ? <Loader /> : "Change Password"}
                type="submit"
                className="w-full bg-secondary mt-10 py-3 md:py-6 font-dm-sans md:text-lg text-white rounded"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
