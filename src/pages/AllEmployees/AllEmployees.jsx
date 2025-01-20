import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Loader from "../../components/shared/Loader/Loader";
import SingleEmployee from "./SingleEmployee";

const AllEmployees = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: employees,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["employees"],
    queryFn: async () => {
      const { data } = await axiosSecure(`/employees/all/${user?.email}`);
      return data;
    },
  });

  if (isLoading) return <Loader />;

  if (isError) return <p>{error.message}</p>;

  console.log(employees);

  return (
    <div className="w-full bg-white p-4 rounded-lg">
      <h2 className="mb-4 text-lg font-bold">
        Total Employees: {employees.length}
      </h2>
      <div className="overflow-auto">
        <table className="w-full border">
          <thead className="border-b bg-olypurWhite rounded-lg">
            <tr className=" *:px-4 *:py-1 *:text-left *:font-medium">
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Designation</th>
              <th>Verfied</th>
              <th>Bank Account</th>
              <th>Salary</th>
              <th>Adjust Salary</th>
              <th>Fire</th>
              <th>Make HR</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody className="">
            {employees.map((singleEmployee, idx) => (
              <SingleEmployee
                key={singleEmployee._id}
                employee={singleEmployee}
                idx={idx}
                refetch={refetch}
              />
            ))}
          </tbody>
        </table>
      </div>
      {/* <button onClick={() => setIsOpen(true)}>Open dialog</button> */}
    </div>
  );
};

export default AllEmployees;
