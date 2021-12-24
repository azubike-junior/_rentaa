import Button from "../../components/Button";
import { HookInput } from "../../components/BasicInputField/index";
import FormTitle from "../../components/FormTitle/index";
import { Link } from "react-router-dom";
import Header from "../../components/Header";

export default function Login() {
  return (
    <>
      <div className="w-full pt-7 py-10 my-12 lg:mt-24 flex items-center justify-center font-dm-sans ">
        <div className="flex flex-col items-start ">
          <FormTitle
            title="Login to your Account?"
            instruction="Please fill in your login details"
          />

          <div className="pt-12 w-full px-3">
            <HookInput
              label="Email Address"
              className="lg:w-600 pt-10"
              name="email"
            />

            <HookInput
              label="Password"
              className="lg:w-600 pt-10"
              name="email"
            />

            <Link to="/">
              <Button
                child="Login"
                type="submit"
                className="w-full bg-secondary mt-10 py-3 md:py-8 font-dm-sans md:text-lg text-white rounded"
              />
            </Link>
            <Link to="/forget_password">
              <p className="text-center pt-7 pb-5 font-semibold">
                Forgot Password?
              </p>
            </Link>

            <p className="text-center">
              Don’t have an Account?{" "}
              <Link to="/sign_up">
                <span className="text-secondary">Create Account here</span>
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
