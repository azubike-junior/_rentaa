import Button from "../../components/Button";
import { HookInput } from "../../components/BasicInputField/index";
import FormTitle from "../../components/FormTitle/index";
import Header from "../../components/Header";

export default function ForgetPassword() {
  return (
    <>
      <div className="w-full pt-7 py-10 my-12 lg:mt-24 flex items-center justify-center ">
        <div className="flex flex-col items-start ">
          <FormTitle
            title="Forgot your password?"
            instruction="Input your email address and check mail for password reset link"
          />

          <div className="pt-12 w-full px-3">
            <HookInput
              label="Email Address"
              className="lg:w-600 pt-10"
              name="email"
            />

            <Button
              child="Submit"
              type="submit"
              className="w-full bg-secondary mt-10 py-3 md:py-8 font-dm-sans md:text-lg text-white rounded"
            />
          </div>
        </div>
      </div>
    </>
  );
}
