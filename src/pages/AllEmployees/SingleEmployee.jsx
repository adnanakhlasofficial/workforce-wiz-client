import { useState } from "react";
import { toast } from "react-toastify";
import SetSalaryModal from "./SetSalaryModal";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const SingleEmployee = ({ employee, idx, refetch }) => {
  console.log(employee);
  const { name, email, bankAccount, designation, salary, verfied, role } =
    employee;
  const [employeeSalary, setEmployeeSalary] = useState(salary);
  let [isOpen, setIsOpen] = useState(false);
  const axiosSecure = useAxiosSecure();

  const handleSalary = (e) => {
    const newSalary = parseInt(e.target.value);

    if (newSalary < salary) {
      toast.error("Employee salary cannot be lower than the current amount.");
      setEmployeeSalary(salary);
    } else {
      setEmployeeSalary(newSalary);
    }
  };

  const updateSalary = async () => {
    try {
      await axiosSecure.patch(`/employee/salary/${email}`, {
        salary: employeeSalary,
      });
      toast.success(
        `Employee salary for ${name} has been successfully updated.`
      );
      refetch();
    } catch (error) {
      toast.error("Something went wrong.");
      console.log(error);
    } finally {
      setIsOpen(false);
    }
  };

  const makeHR = async () => {
    try {
      await axiosSecure.patch(`/employee/role/${email}`);
      toast.success("Employee role has been updated to HR");
      refetch();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong.");
    }
  };

  return (
    <>
      <tr className=" *:px-4 *:py-1 *:text-left *:font-medium border-b">
        <td>{idx + 1}</td>
        <td>{name}</td>
        <td>{email}</td>
        <td>{!designation || role === "HR" ? "HR" : designation}</td>
        <td>{verfied}</td>
        <td>{bankAccount}</td>
        <td>{salary}</td>
        <td className="flex items-center">
          <button
            onClick={() => setIsOpen(true)}
            className="px-6 py-1 bg-orange-100 text-orange-500 rounded-full text-sm font-semibold disabled:text-errigalWhite disabled:bg-walrus"
          >
            Set Salary
          </button>
        </td>
        <td>
          <button className="px-6 py-1 bg-red-100 text-red-500 rounded-full text-sm font-semibold disabled:text-errigalWhite disabled:bg-walrus">
            Fire
          </button>
        </td>
        <td>
          <button
            onClick={makeHR}
            disabled={role === "HR" ? true : false}
            className="px-6 py-1 bg-green-100 text-green-500 rounded-full text-sm font-semibold disabled:text-errigalWhite disabled:bg-walrus"
          >
            Make HR
          </button>
        </td>
        <td>Details</td>
      </tr>

      <SetSalaryModal
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        employeeSalary={employeeSalary}
        handleSalary={handleSalary}
        updateSalary={updateSalary}
      />
    </>
  );
};

export default SingleEmployee;
