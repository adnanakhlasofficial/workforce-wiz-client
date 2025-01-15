import { Link, useNavigate } from "react-router-dom";
import InputField from "../../components/shared/InputField/InputField";
import Button from "../../components/shared/Button/Button";
import SocialLogin from "../../components/shared/SocialLogin/SocialLogin";
import signUp from "../../assets/illustrations/sign-up.svg";
import { getImageUrl } from "../../utilities";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import { useState } from "react";

const SignUp = () => {
  const { createUser, updateUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    const regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    const imageFile = form.image.files[0];
    // image url get
    const imageURL = await getImageUrl(imageFile);

    if (password !== confirmPassword)
      return console.log("password ain't match");

    if (!regex.test(password)) return console.log("boom");

    try {
      await createUser(email, password);
      await updateUser({ displayName: name, photoURL: imageURL });
      toast.success("Successfully signed up!");
      setLoading(false);
      navigate("/");
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Sign up failed. Please try again.");
    }
  };

  return (
    <section className="mx-auto my-20 flex gap-12 flex-col lg:flex-row justify-center items-center rounded-lg bg-white !w-max p-8 lg:p-20 ">
      <div className="max-w-lg">
        <img className="w-40 lg:w-full" src={signUp} alt="" />
      </div>
      <div className=" rounded-lg max-w-sm w-full">
        <h2 className="text-xl font-bold mb-6">Create Your Profile</h2>
        <form onSubmit={handleSignUp} className="grid grid-cols-1 gap-4">
          <InputField
            label={"full name"}
            id={"name"}
            type={"text"}
            placeholder={"Enter your full name"}
          />

          <div className="flex flex-col gap-1">
            <label className="capitalize font-semibold " htmlFor="image">
              Profile Image
            </label>
            <input
              required
              type="file"
              id="image"
              accept="image/*"
              className="file:bg-whiteSmoke file:hover:bg-[#d6d6d6] hover:cursor-pointer file:text-cocoBlack file:font-medium file:border-none file:outline-none file:px-4 file:py-1 file:rounded-sm !w-max file:transition file:duration-300 file:cursor-pointer"
            />
          </div>

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
          <InputField
            label={"confirm password"}
            type={"password"}
            id={"confirmPassword"}
            placeholder={"Enter your password"}
          />
          <Button label={"Sign Up"} loading={loading} />
        </form>
        <div className="my-6 border border-[#e0e0e1] relative before:content-['OR'] before:absolute before:bottom-full before:bg-white before:px-2 before:left-1/2 before:-translate-x-1/2 before:translate-y-1/2 before:text-sm before:font-medium before:text-iron"></div>
        <SocialLogin label={"Sign Up"} alert={"Sign up"} />
        <p className="mt-2 text-primary flex gap-1">
          Already have an account?
          <Link className="hover:underline underline-offset-2" to={"/sign-in"}>
            Sign in here!
          </Link>
        </p>
      </div>
    </section>
  );
};

export default SignUp;
