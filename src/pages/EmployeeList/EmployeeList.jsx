import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Loader from "../../components/shared/Loader/Loader";
import { FaCheck } from "react-icons/fa6";
import { CgClose } from "react-icons/cg";
import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";

const EmployeeList = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

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

  const handleVerify = async (id) => {
    console.log(id);
    try {
      await axiosSecure.patch(`/employee/${id}`);
      toast.success("Employee verified successfully!");
      refetch();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong.");
    }
  };

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
            <tr
              key={employee._id}
              className="border-b *:px-4 *:py-2 hover:bg-whiteSmoke"
            >
              <td>{idx + 1}</td>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td className="flex items-center justify-center">
                {employee.verified ? (
                  <span>
                    <FaCheck
                      className="text-errigalWhite bg-green-500 p-1 rounded-sm"
                      size={24}
                    />
                  </span>
                ) : (
                  <button onClick={() => handleVerify(employee._id)}>
                    <CgClose
                      className="text-errigalWhite bg-red-500 p-1 rounded-sm"
                      size={24}
                    />
                  </button>
                )}
              </td>
              <td>{employee.bankAccount}</td>
              <td>${employee.salary}</td>
              <td>Pay</td>
              <td>Details</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
