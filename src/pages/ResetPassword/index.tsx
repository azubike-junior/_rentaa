import Button from "../../components/Button";
import { HookInput, InputField } from "../../components/BasicInputField/index";
import FormTitle from "../../components/FormTitle/index";
import Header from "../../components/Header";
import { Link, useHistory, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { forgetPassword } from "../../services/Mutations/forgetPassword";
import { RootState } from "../../store/store";
import Loader from "../../components/Loader";
import { resetPassword } from './../../services/Mutations/resetPassword';

export interface IResetPasswordProp {
  password: string;
}
export default function ResetPassword() {
  const history = useHistory();
  const dispatch = useDispatch();

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
      history,
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
              Sorry, Please this token has expired
            </p>
          )}

          <div className="pt-10 w-full px-3">
            <InputField
              register={register}
              errors={errors?.password}
              label="Password"
              className="lg:w-600 pt-10"
              name="password"
              required
              message="Please enter Password"
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
