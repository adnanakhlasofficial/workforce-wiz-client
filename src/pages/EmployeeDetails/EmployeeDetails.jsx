import { useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../components/shared/Loader/Loader";
import { FaUserCircle } from "react-icons/fa";
import { GoUnverified, GoVerified } from "react-icons/go";
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";
import { Legend } from "@headlessui/react";
import { format } from "date-fns";

const EmployeeDetails = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();

  const {
    data: user,
    isLoading: userLoading,
    isError: userIsError,
    error: userError,
  } = useQuery({
    queryKey: ["userDetails", id],
    queryFn: async () => {
      const { data } = await axiosSecure(`/employee/details/${id}`);
      return data;
    },
  });

  const {
    data: details,
    isLoading: detailsLoading,
    isError: detailsIsError,
    error: detailsError,
  } = useQuery({
    queryKey: ["details", id],
    queryFn: async () => {
      const { data } = await axiosSecure(`/details/payroll/${id}`);
      console.log("full", data);
      return data;
    },
  });

  if (detailsLoading || userLoading) return <Loader />;

  if (detailsIsError || userIsError)
    return <p>{detailsError.message || userError.message}</p>;

  const { role, bankAccount, email, verified, imageURL, name, designation } =
    user;

  const data = [
    {
      date: "Page A",
      uv: 4000,
      salary: 2400,
    },
    {
      date: "Page B",
      uv: 3000,
      salary: 1398,
    },
    {
      date: "Page C",
      uv: 2000,
      salary: 9800,
    },
    {
      date: "Page D",
      uv: 2780,
      salary: 3908,
    },
    {
      date: "Page E",
      uv: 1890,
      salary: 4800,
    },
    {
      date: "Page F",
      uv: 2390,
      salary: 3800,
    },
    {
      date: "Page G",
      uv: 3490,
      salary: 4300,
    },
  ];

  console.log(details);

  const newDetails = details.map((detail) => {
    return {
      ...detail,
      payDate: detail?.paymentDate
        ? format(new Date(detail?.paymentDate), "MMMM - yyyy")
        : "not paid",
    };
  });

  return (
    <>
      <section className="flex gap-4 flex-col max-w-4xl mx-auto">
        {/* profile */}
        <div className="w-full flex justify-center items-center">
          <div className="bg-white shadow-lg rounded-2xl w-full">
            <div className="flex flex-col items-center justify-center p-4 ">
              <img
                alt={name}
                src={imageURL || <FaUserCircle />}
                className="p-4 mx-auto object-cover rounded-full h-28 w-28  border-2 border-white "
              />

              <p className="py-1 px-6 text- text-white bg-midnightOcean rounded-md mt-2">
                {name}
              </p>
              <p className="mt-2 text-sm font-semibold text-cocoBlack flex items-center gap-1">
                {role}{" "}
                <span>
                  {verified ? (
                    <GoVerified className="text-green-500" size={24} />
                  ) : (
                    <GoUnverified className="text-red-500" size={24} />
                  )}
                </span>
              </p>
              <div className="w-fit mx-auto p-2 mt-4 rounded-lg">
                <div className="flex justify-center gap-4 text-sm text-gray-600 ">
                  <p className="flex flex-col">
                    Designation
                    <span className="font-medium text-cocoBlack ">
                      {designation || "Human Resource Manager"}
                    </span>
                  </p>
                  <p className="flex flex-col">
                    Email
                    <span className="font-medium text-cocoBlack ">{email}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* chart */}
        <div className=" w-full bg-white shadow-lg p-8 rounded-2xl overflow-x-auto">
          <BarChart width={730} height={250} data={newDetails}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={"payDate"} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="salary" fill="#8884d8" />
          </BarChart>
        </div>
      </section>
    </>
  );
};

export default EmployeeDetails;
