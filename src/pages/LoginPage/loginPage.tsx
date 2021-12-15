import Button from "../../components/Button";
import { HookInput } from './../../components/BasicInputField/index';
import FormTitle from './../../components/FormTitle/index';

export default function LoginPage() {
    return (
        <div className="container h-full flex flex-col justify-center mx-auto py-5 px-5 max-w-sm md:max-w-md lg:max-w-2xl">
            <FormTitle title="Forgot your password?" instruction="Input your email address and check mail for password reset link"/>
            <form>
                <div className="formInputs mb-14 px-3 lg:px-0 lg:mb-20">
                    <HookInput label="Email Address" name="email"/>
                </div>
                <Button
                    child="Submit"
                    type="submit"
                    className="w-full py-7 bg-secondary font-sans text-white rounded lg:mx-3"
                />
            </form>
        </div>
    );
}