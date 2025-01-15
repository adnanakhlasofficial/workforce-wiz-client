import { FaGoogle } from "react-icons/fa6";

const SocialLogin = ({ label }) => {
  return (
    <div className="mt-4">
      <button className="px-4 py-2 border-2 w-full rounded-md mt-2 font-bold text-primary hover:bg-primary hover:text-errigalWhite hover:border-primary transition duration-300 flex gap-2 items-center justify-center text-lg">
        <FaGoogle size={24} />
        {label} with Google
      </button>
    </div>
  );
};

export default SocialLogin;
