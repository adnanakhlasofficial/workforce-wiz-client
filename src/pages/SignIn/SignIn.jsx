import { Link } from "react-router-dom";
import signIn from "../../assets/illustrations/sign-in.svg";
import Button from "../../components/shared/Button/Button";
import InputField from "../../components/shared/InputField/InputField";
import SocialLogin from "../../components/shared/SocialLogin/SocialLogin";

const SignIn = () => {
  return (
    <section className="mx-auto my-20 flex gap-12 flex-row-reverse justify-center items-center rounded-lg bg-white py-20 !w-max !px-20">
      <div className="max-w-sm">
        <img src={signIn} alt="" />
      </div>
      <div className=" rounded-lg max-w-sm w-full">
        <h2 className="text-xl font-bold mb-6">Log In to Continue</h2>
        <form className="grid grid-cols-1 gap-4">
          <InputField
            label={"email"}
            type={"email"}
            placeholder={"Enter your email"}
          />

          <InputField
            label={"password"}
            type={"password"}
            id={"password"}
            placeholder={"Enter your password"}
          />
          <Link className="text-xs text-cocoBlack -mt-3 ml-2 hover:underline ">
            Forgot Password?
          </Link>
          <Button label={"Sign In"} />
        </form>
        <div className="my-6 border border-[#e0e0e1] relative before:content-['OR'] before:absolute before:bottom-full before:bg-white before:px-2 before:left-1/2 before:-translate-x-1/2 before:translate-y-1/2 before:text-sm before:font-medium before:text-iron"></div>
        <SocialLogin label={"Sign In"} />
        <p className="mt-2 text-primary flex gap-1">
          New here?
          <Link className="hover:underline underline-offset-2" to={"/sign-up"}>
            Create an account.
          </Link>
        </p>
      </div>
    </section>
  );
};

export default SignIn;
