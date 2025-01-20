import { useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../components/shared/Loader/Loader";

const EmployeeDetails = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();

  const {
    data: details,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["details", id],
    queryFn: async () => {
      const { data } = await axiosSecure(`/details/payroll/${id}`);
      return data;
    },
  });

  if (isLoading) return <Loader />;

  if (isError) return <p>{error.message}</p>;

  console.log(details);

  return <div className="flex gap-5">employeeDetails</div>;
};

export default EmployeeDetails;
