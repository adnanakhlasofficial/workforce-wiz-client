import { Link, useNavigate } from "react-router-dom";
import InputField from "../../components/shared/InputField/InputField";
import Button from "../../components/shared/Button/Button";
import SocialLogin from "../../components/shared/SocialLogin/SocialLogin";
import signUp from "../../assets/illustrations/sign-up.svg";
import { getImageUrl } from "../../utilities";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import { useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const SignUp = () => {
  const { createUser, updateUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const [passwordValidation, setPasswordValidation] = useState(false);
  const [employeeRole, setEmployeeRole] = useState("Select Role");
  const [employeeDesignation, setEmployeeDesignation] =
    useState("Select Designation");
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

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
    const role = employeeRole;
    const designation =
      employeeDesignation === "Select Designation" ? null : employeeDesignation;
    const bankAccount = form.bankAccount.value;

    if (password !== confirmPassword) {
      setLoading(false);
      return toast.error("Passwords do not match. Please try again.");
    }

    if (!regex.test(password)) {
      setLoading(false);
      toast.error("Password validation error");
      return setPasswordValidation(true);
    }

    const employeeInfo = {
      name,
      email,
      password,
      imageURL,
      role,
      designation,
      bankAccount,
    };

    try {
      await createUser(email, password);
      await updateUser({ displayName: name, photoURL: imageURL });
      toast.success("Successfully signed up!");
      await axiosSecure.post("/employee", employeeInfo);
      setLoading(false);
      navigate("/");
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Sign up failed. Please try again.");
    }
  };

  return (
    <section className="mx-auto my-20 flex flex-col  gap-12 lg:flex-row-reverse justify-center items-center  rounded-lg bg-white p-10 lg:p-20 w-fit ">
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
          {/* Role */}
          <div className="flex flex-col gap-1">
            <label className="capitalize font-semibold " htmlFor="role">
              Role:
            </label>
            <select
              value={employeeRole}
              onChange={(e) => setEmployeeRole(e.target.value)}
              required
              id="role"
              name="role"
              className="input-field !w-full"
            >
              <option disabled value="Select Role">
                Select Role
              </option>
              <option value="HR">HR</option>
              <option value="Employee">Employee</option>
            </select>
          </div>
          {/* Designation
           */}
          <div className="flex flex-col gap-1">
            <label className="capitalize font-semibold " htmlFor="designation">
              Designation:
            </label>
            <select
              value={employeeDesignation}
              onChange={(e) => setEmployeeDesignation(e.target.value)}
              required
              disabled={employeeRole !== "Employee" ? true : false}
              id="designation"
              name="designation"
              className="input-field !w-full"
            >
              <option disabled value="Select Designation">
                Select Designation
              </option>
              <option value="Sales Assistant">Sales Assistant</option>
              <option value="Social Media executive">
                Social Media executive
              </option>
              <option value="Digital Marketer">Digital Marketer</option>
              <option value="Paper Work">Paper Work</option>
            </select>
          </div>

          <InputField
            label={"bank account"}
            id={"bankAccount"}
            type={"number"}
            placeholder={"Enter your bank account number"}
          />

          <InputField
            label={"password"}
            type={"password"}
            id={"password"}
            placeholder={"Enter your password"}
          />
          {passwordValidation && (
            <p className="text-sm -mt-4 text-red-500 font-medium">
              Password must be at least 6 characters, with one uppercase letter
              and one special character (!@#$%^&*).
            </p>
          )}
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
        <p className="mt-2 text-primary">
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
