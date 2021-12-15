import Button from "../../components/Button";
import { HookInput } from "../../components/BasicInputField/index";
import FormTitle from "../../components/FormTitle/index";
import { Link } from "react-router-dom";

export default function ChangePassword() {
  return (
    <div className="w-full pt-7 py-10 my-12 lg:mt-24 flex items-center justify-center ">
      <div className="flex flex-col items-start ">
        <FormTitle
          title="Change your Password"
          instruction="Please fill in password details"
        />

        <div className="pt-12 w-full px-3">
          <HookInput
            label="Old Password"
            className="lg:w-600 pt-10"
            name="email"
          />

          <HookInput label="New Password" className="lg:w-600 pt-10" name="email" />

          <Link to="/">
            <Button
              child="Change Password"
              type="submit"
              className="w-full bg-secondary mt-10 py-3 md:py-8 font-dm-sans md:text-lg text-white rounded"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
