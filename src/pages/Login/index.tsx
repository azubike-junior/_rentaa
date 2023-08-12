import Button from "../../components/Button";
import { HookInput, InputField } from "../../components/BasicInputField/index";
import FormTitle from "../../components/FormTitle/index";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import { useForm } from "react-hook-form";
import { RootState, useAppDispatch } from "../../store/store";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ILogin } from "../../interfaces";
import { loginUser } from "../../services/Mutations/login";
import Loader from "../../components/Loader";
import LandingPageNavBar from './../../components/LandingPageNavBar/index';

export default function Login() {
  const [passwordEye, setPasswordEye] = useState(false);
  const { data, error, error2, loading } = useSelector(
    (state: RootState) => state.loginReducer
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ILogin>({
    mode: "onTouched",
  });

  const handlePasswordClick = () => {
    setPasswordEye(!passwordEye);
  };

  const handleLogin = (data: ILogin) => {
    const { email, password } = data;
    const newData = {
      email: email.trim(),
      password,
      navigate,
    };
    dispatch(loginUser(newData));
  };

  return (
    <>
    <LandingPageNavBar/>
      <div className="w-full pt-7 py-10 my-12 lg:mt-14 flex items-center justify-center font-dm-sans ">
        <div className="flex flex-col items-start ">
          <FormTitle
            title="Login to your Account ?"
            instruction="Please fill in your login details"
          />
          {error?.statusCode === 400 && (
            <p className="text-sm px-3 pt-4 md:text-base text-red-500 font-dm-sans">
              Invalid Login Credentials, Please Enter the right credentials to
              continue.
            </p>
          )}
          <form
            className="pt-10 w-full px-3"
            onSubmit={handleSubmit(handleLogin)}
          >
            <InputField
              label="Email Address"
              name="email"
              type="text"
              className="w-full lg:w-600"
              required
              register={register}
              errors={errors?.email}
              message="Email Address is required"
            />

            <InputField
              label="Password"
              name="password"
              type={passwordEye ? "text" : "password"}
              className="lg:w-600 md:w-500 pt-10"
              required
              // maxLength={8}
              minLength={8}
              register={register}
              errors={errors?.password}
              onClick={handlePasswordClick}
              message="Password must be more than 8 chars"
              show 
            />

            <Button
              child={loading ? <Loader /> : "Login"}
              type="submit"
              className="w-full bg-secondary md:text-lg mt-10 py-3 md:py-8 font-dm-sans text-white rounded"
            />

            <a href="/forget_password">
              <p className="text-center pt-7 pb-5 font-semibold text-secondary">
                Forgot Password
              </p>
            </a>

            <p className="text-center">
              Don’t have an Account?{" "}
              <a href="/sign_up">
                <span className="text-secondary">Create Account here</span>
              </a>{" "}
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
