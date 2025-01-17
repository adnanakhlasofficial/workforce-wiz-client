import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Loader from "../../components/shared/Loader/Loader";
import useAuth from "../../hooks/useAuth";
import TableRow from "./TableRow";

const EmployeeList = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: employees,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["employees", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure(`/employees/${user?.email}`);
      return data;
    },
  });

  if (isLoading) return <Loader />;

  if (isError) return <p>{error}</p>;

  return (
    <div className="w-full bg-white p-4 rounded-lg">
      <h2 className="mb-4 text-lg font-bold">
        Total Employees: {employees.length}
      </h2>
      <table className="w-full border">
        <thead className="border-b bg-olypurWhite rounded-lg">
          <tr className=" *:px-4 *:py-1 *:text-left *:font-medium">
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Verified</th>
            <th>Bank Account</th>
            <th>Salary</th>
            <th>Pay</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody className="">
          {employees.map((employee, idx) => (
            <TableRow
              key={employee._id}
              employee={employee}
              idx={idx}
              refetch={refetch}
            />
          ))}
        </tbody>
      </table>
      {/* <button onClick={() => setIsOpen(true)}>Open dialog</button> */}
    </div>
  );
};

export default EmployeeList;
