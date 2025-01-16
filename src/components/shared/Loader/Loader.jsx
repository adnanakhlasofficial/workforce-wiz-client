import { BeatLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className={`flex flex-col justify-center items-center h-screen`}>
      <BeatLoader size={30} color="#1C3D5A" />
    </div>
  );
};

export default Loader;
