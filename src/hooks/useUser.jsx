import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useUser = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const info = useQuery({
    queryKey: ["employee", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure(
        `https://workforce-wiz.vercel.app/employee/${user?.email}`
      );
      return data;
    },
  });

  return info;
};

export default useUser;
