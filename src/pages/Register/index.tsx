import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HookInput, InputField } from "../../components/BasicInputField";
import Button from "../../components/Button";
import FormTitle from "../../components/FormTitle/index";
import { useForm } from "react-hook-form";
// import { useRegisterMutation } from "../../services/Mutations/register";
import { IRegistration } from "./../../interfaces/index";
import { useDispatch, useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store/store";
import { registerUser } from "./../../services/Mutations/register";
import Loader from "../../components/Loader";
import LandingPageNavBar from "../../components/LandingPageNavBar";

export default function SignUp() {
  const [passwordEye, setPasswordEye] = useState(false);
  const [confirmPasswordEye, setConfirmPasswordEye] = useState(false);
  const { data, error, error2, loading } = useSelector(
    (state: RootState) => state.registerReducer
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const pattern2 = {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IRegistration>({
    mode: "onTouched",
  });

  const password = watch("password");

  const handleSignUp = (data: IRegistration) => {
    const {
      confirm_password,
      phone_number,
      password,
      email,
      last_name,
      first_name,
    } = data;

    const newData = {
      first_name,
      last_name,
      email,
      phone_number,
      password,
      navigate,
    };

    dispatch(registerUser(newData));
  };

  const handlePasswordClick = () => {
    setPasswordEye(!passwordEye);
  };

  const handleConfirmPasswordClick = () => {
    setConfirmPasswordEye(!confirmPasswordEye);
  };

  return (
    <>
      <LandingPageNavBar />
      <div className="w-full pt-7 py-10 my-12 lg:mt-14 flex items-center justify-center ">
        <div className="flex flex-col items-start ">
          <FormTitle
            title="Let's Create your Account"
            instruction="Welcome to the creative gateway"
          />
          {error?.statusCode === 400 && (
            <p className="text-sm px-3 pt-4 md:text-base text-red-500 font-dm-sans">
              Email has been used, Please try signing up with a different email
            </p>
          )}
          <form
            className="px-3 pt-10 w-full"
            onSubmit={handleSubmit(handleSignUp)}
          >
            <div>
              <InputField
                label="First Name"
                name="first_name"
                type="text"
                className="w-full"
                required
                register={register}
                errors={errors?.first_name}
                message="First Name is required"
              />
              <InputField
                label="Last Name"
                name="last_name"
                type="text"
                className="lg:w-600 pt-10"
                required
                register={register}
                errors={errors?.last_name}
                message="Last Name is required"
              />
              <InputField
                label="Email Address"
                name="email"
                type="text"
                required
                register={register}
                pattern={pattern2}
                className=" lg:w-600 pt-10"
                errors={errors?.email}
                message="Please Enter a valid Email Address"
              />
              <InputField
                label="Phone Number"
                name="phone_number"
                type="number"
                maxLength={11}
                minLength={11}
                required
                register={register}
                className="lg:w-600 pt-10"
                errors={errors?.phone_number}
                message="Phone Number is required"
              />
              <InputField
                label="Password"
                name="password"
                type={passwordEye ? "text" : "password"}
                show
                required
                register={register}
                errors={errors?.password}
                minLength={8}
                className=" lg:w-600 pt-10"
                onClick={handlePasswordClick}
                message="Password must be more than 8 chars"
              />
              <InputField
                label="Confirm Password"
                name="confirm_password"
                type={confirmPasswordEye ? "text" : "password"}
                show
                required
                register={register}
                errors={errors?.confirm_password}
                onClick={handleConfirmPasswordClick}
                className=" lg:w-600 pt-10"
                password={password}
                message="Password do not match"
                validate={(value: any) =>
                  value === password || "Password do not match"
                }
              />

              <span className="hidden md:flex items-center justify-center font-dm-sans pt-8 text-sm">
                By clicking <span className="text-secondary px-1">Sign up</span>{" "}
                you agree to Rentaa's{" "}
                <Link to="#" className="px-1 text-secondary">
                  Private Policy
                </Link>{" "}
                and{" "}
                <Link to="#" className="px-1 text-secondary">
                  Terms and Conditions
                </Link>
              </span>
              <p className="text-xs md:hidden text-center w-72 pt-6">
                By clicking sign up you agree to Rentaa's{" "}
                <Link to="#" className="text-secondary">
                  Private Policy
                </Link>{" "}
                and{" "}
                <Link to="#" className="text-secondary">
                  Terms and Conditions
                </Link>
              </p>

              <Button
                child={loading ? <Loader /> : "Sign Up"}
                type="submit"
                className="w-full bg-secondary md:text-lg mt-10 py-3 md:py-8 font-dm-sans text-white rounded"
              />

              <span className="flex items-center justify-center font-dm-sans pt-8 text-base">
                Have an Account?{" "}
                <a href="/login" className="text-secondary px-2">
                  {" "}
                  Log in here{" "}
                </a>{" "}
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
