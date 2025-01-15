import { FaGoogle } from "react-icons/fa6";
import useAuth from "../../../hooks/useAuth";
import { toast } from "react-toastify";
import { useState } from "react";
import { ImSpinner9 } from "react-icons/im";

const SocialLogin = ({ label, alert }) => {
  const { googleLogin } = useAuth();
  const [loading, setLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
      await googleLogin();
      toast.success(`Successfully ${alert.split(" ")[0]}ed in!`);
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error(`${alert} failed. Please try again.`);
      setLoading(false);
    }
  };

  return (
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
  );
};

export default SocialLogin;
