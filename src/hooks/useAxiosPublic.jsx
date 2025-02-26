import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://workforce-wiz.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
