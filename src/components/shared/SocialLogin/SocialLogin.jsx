import { FaGoogle } from "react-icons/fa6";
import useAuth from "../../../hooks/useAuth";
import { toast } from "react-toastify";
import { useState } from "react";
import { ImSpinner9 } from "react-icons/im";
import EmployeeForm from "./EmployeeForm";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const SocialLogin = ({ label, alert }) => {
  const { googleLogin, user } = useAuth();
  const [loading, setLoading] = useState(false);
  let [isOpen, setIsOpen] = useState(false);
  const [employeeDesignation, setEmployeeDesignation] =
    useState("Select Designation");
  const { state } = useLocation();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
      const user = await googleLogin();
      setLoading(false);
      const { data } = await axiosSecure(`/employee/${user?.user?.email}`);
      if (data?.email === user?.user?.email) {
        navigate(state ? state : "/");
        toast.success(`Successfully ${alert.split(" ")[0]}ed in!`);
      } else {
        setIsOpen(true);
      }
    } catch (error) {
      console.log(error);
      toast.error(`${alert} failed. Please try again.`);
      setLoading(false);
    }
  };

  const handleInfoSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const designation = employeeDesignation;
    const salary = form.googleSalary.value;
    const bankAccount = form.googleBankAccount.value;
    const employeeInfo = {
      name: user?.displayName,
      email: user?.email,
      imageURL: user?.photoURL,
      role: "Employee",
      designation,
      salary,
      bankAccount,
    };
    console.log(employeeInfo);
    try {
      await axiosSecure.post("/employee", employeeInfo);
      toast.success(`Successfully ${alert.split(" ")[0]}ed in!`);
    } catch (error) {
      console.log(error);
    } finally {
      setIsOpen(false);
      navigate(state ? state : "/");
    }
  };

  return (
    <>
      <div className="mt-4">
        <button
          onClick={handleGoogleSignIn}
          className="px-4 py-2 border-2 w-full rounded-md mt-2 font-bold text-primary hover:bg-primary hover:text-errigalWhite hover:border-primary transition duration-300 flex gap-2 items-center justify-center text-lg"
        >
          {loading ? (
            <>
              <ImSpinner9
                size={28}
                className="animate-spin text-center w-full text-lg"
              />
            </>
          ) : (
            <>
              <FaGoogle size={24} />
              {label} with Google
            </>
          )}
        </button>
      </div>
      <EmployeeForm
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        employeeDesignation={employeeDesignation}
        setEmployeeDesignation={setEmployeeDesignation}
        handleInfoSubmit={handleInfoSubmit}
        user={user}
      />
    </>
  );
};

export default SocialLogin;
