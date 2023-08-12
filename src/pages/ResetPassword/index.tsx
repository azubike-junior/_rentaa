import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { InputField } from "../../components/BasicInputField/index";
import Button from "../../components/Button";
import FormTitle from "../../components/FormTitle/index";
import Loader from "../../components/Loader";
import { RootState, useAppDispatch } from "../../store/store";
import { resetPassword } from './../../services/Mutations/resetPassword';

export interface IResetPasswordProp {
  password: string;
}
export default function ResetPassword() {
  const [passwordEye, setPasswordEye] = useState(false);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handlePasswordClick = () => {
    setPasswordEye(!passwordEye);
  };

  const { token } = useParams<{ token: string }>();

  console.log(">>>>token", token);

  const {
    data: response,
    error,
    loading,
  } = useSelector((state: RootState) => state.resetPasswordReducer);

  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { errors },
  } = useForm<IResetPasswordProp>({
    mode: "onTouched",
  });

  const postPasswordHandler = (data: IResetPasswordProp) => {
    const { password } = data;
    const newData = {
      navigate,
      password,
      token,
    };
    dispatch(resetPassword(newData));
  };

  return (
    <>
      <div className="w-full pt-7 py-10 my-12 lg:mt-24 flex items-center justify-center ">
        <form
          onSubmit={handleSubmit(postPasswordHandler)}
          className="flex flex-col items-start "
        >
          <FormTitle
            title="Enter New password?"
            instruction="Input a new password so that you can login"
          />
          {error?.statusCode === 400 && (
            <p className=" text-red-500 pl-3 pt-5 text-base">
              Sorry, Please This token has expired
            </p>
          )}

          {error?.statusCode === 403 && (
            <p className=" text-red-500 pl-3 pt-5 text-base">
              Sorry, You're already using this password. Please use a different
              password
            </p>
          )}

          <div className="pt-10 w-full px-3">
            <InputField
              register={register}
              errors={errors?.password}
              label="Password"
              className="lg:w-600 pt-10"
              type={passwordEye ? "text" : "password"}
              onClick={handlePasswordClick}
              name="password"
              minLength={8}
              required
              message="Please enter Password"
              show 
            />

            <Button
              child={loading ? <Loader /> : "Submit"}
              type="submit"
              className="w-full bg-secondary mt-10 py-3 md:py-8 font-dm-sans md:text-lg text-white rounded"
            />
          </div>
        </form>
      </div>
    </>
  );
}
