import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { toast } from "react-toastify";

const useAxiosSecure = () => {
  const { logoutUser } = useAuth() || {};
  const axiosInstance = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: true,
  });

  useEffect(() => {
    axiosInstance.interceptors.response.use(
      (res) => {
        return res;
      },
      (err) => {
        console.log(err);
        if (err.status === 401 || err.status === 403) {
          toast.error(err.response.data.message);
          logoutUser();
        }
        return Promise.reject(err);
      }
    );
  }, []);

  return axiosInstance;
};

export default useAxiosSecure;
