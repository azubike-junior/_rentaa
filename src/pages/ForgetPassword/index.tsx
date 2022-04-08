import Button from "../../components/Button";
import { HookInput, InputField } from "../../components/BasicInputField/index";
import FormTitle from "../../components/FormTitle/index";
import Header from "../../components/Header";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { forgetPassword } from "../../services/Mutations/forgetPassword";
import { RootState } from "../../store/store";
import Loader from "../../components/Loader";

export interface IForgetPasswordProp {
  email: string;
}
export default function ForgetPassword() {
  const history = useHistory();
  const dispatch = useDispatch();

  const { data: response, error, loading } = useSelector(
    (state: RootState) => state.forgetPasswordReducer
  );

  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { errors },
  } = useForm<IForgetPasswordProp>({
    mode: "onTouched",
  });

  const postEmailHandler = (data: IForgetPasswordProp) => {
    const { email } = data;
    const newData = {
      history,
      email,
    };
    dispatch(forgetPassword(newData));
  };

  return (
    <>
      <div className="w-full pt-7 py-10 my-12 lg:mt-24 flex items-center justify-center ">
        <form
          onSubmit={handleSubmit(postEmailHandler)}
          className="flex flex-col items-start "
        >
          <div className="px-4 md:px-0">
            <FormTitle
              title="Forgot your password?"
              instruction="Input your email address and check mail for password reset link"
            />
          </div>

          {error?.statusCode === 404 && (
            <p className=" text-red-500 pl-3 pt-5 text-base">
              Sorry, this email address does not exist on our system
            </p>
          )}

          <div className="pt-2 md:pt-10 w-full px-7 md:px-3">
            <InputField
              register={register}
              errors={errors?.email}
              label="Email Address"
              className="lg:w-600 pt-10"
              name="email"
              required
              message="Please enter email to continue"
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
