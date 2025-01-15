import { ImSpinner9 } from "react-icons/im";

const Button = ({ label, loading }) => {
  return (
    <>
      <button className="btn !rounded-md py-2 text-lg">
        {loading ? (
          <>
            <ImSpinner9
              size={28}
              className="animate-spin text-center w-full text-lg"
            />
          </>
        ) : (
          label
        )}
      </button>
    </>
  );
};

export default Button;
