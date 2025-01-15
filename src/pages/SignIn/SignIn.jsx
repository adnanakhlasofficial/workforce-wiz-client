import { Link } from "react-router-dom";
import signIn from "../../assets/illustrations/sign-in.svg";
import Button from "../../components/shared/Button/Button";
import InputField from "../../components/shared/InputField/InputField";
import SocialLogin from "../../components/shared/SocialLogin/SocialLogin";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import { useState } from "react";

const SignIn = () => {
  const { loginUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      await loginUser(email, password);
      toast.success("Successfully signed in!");
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error("Sign in failed. Please try again.");
      setLoading(false);
    }
  };

  return (
    <section className="mx-auto my-20 flex gap-12 flex-row-reverse justify-center items-center rounded-lg bg-white py-20 !w-max !px-20">
      <div className="max-w-sm">
        <img src={signIn} alt="" />
      </div>
      <div className=" rounded-lg max-w-sm w-full">
        <h2 className="text-xl font-bold mb-6">Log In to Continue</h2>
        <form onSubmit={handleSignIn} className="grid grid-cols-1 gap-4">
          <InputField
            label={"email"}
            id={"email"}
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
          <Button label={"Sign In"} loading={loading} />
        </form>
        <div className="my-6 border border-[#e0e0e1] relative before:content-['OR'] before:absolute before:bottom-full before:bg-white before:px-2 before:left-1/2 before:-translate-x-1/2 before:translate-y-1/2 before:text-sm before:font-medium before:text-iron"></div>
        <SocialLogin label={"Sign In"} alert={"Sign in"} />
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
