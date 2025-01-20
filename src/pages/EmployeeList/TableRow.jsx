import { CgClose } from "react-icons/cg";
import Modal from "../../components/shared/Modal/Modal";
import { useState } from "react";
import { toast } from "react-toastify";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FaCheck } from "react-icons/fa6";
import PayModal from "./PayModal";
import { Link } from "react-router-dom";

const TableRow = ({ employee, idx, refetch }) => {
  const axiosSecure = useAxiosSecure();
  let [isOpen, setIsOpen] = useState(false);
  let [payModal, setPayModal] = useState(false);
  const { _id, name, email, verified, bankAccount, salary, designation } =
    employee;
  const [salaryPayDate, setSalaryPayDate] = useState(new Date());

  const handleVerify = async () => {
    console.log(_id);
    try {
      await axiosSecure.patch(`/employee/${_id}`);
      toast.success("Employee verified successfully!");
      refetch();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong.");
    } finally {
      setIsOpen(false);
    }
  };
  const handlePay = async (e) => {
    e.preventDefault();
    const employeeTaskPay = {
      name,
      email,
      bankAccount,
      salary,
      designation,
      date: salaryPayDate,
    };
    try {
      await axiosSecure.post("/employee/payroll", employeeTaskPay);
      toast.success("Payroll Submitted to Admin.");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong.");
    } finally {
      setPayModal(false);
    }
  };

  return (
    <>
      <tr className="border-b *:px-4 *:py-2 hover:bg-whiteSmoke">
        <td>{idx + 1}</td>
        <td>{name}</td>
        <td>{email}</td>
        <td className="flex items-center justify-center">
          {verified ? (
            <span>
              <FaCheck
                className="text-errigalWhite bg-green-500 p-1 rounded-sm"
                size={24}
              />
            </span>
          ) : (
            <button onClick={() => setIsOpen(true)}>
              <CgClose
                className="text-errigalWhite bg-red-500 p-1 rounded-sm"
                size={24}
              />
            </button>
          )}
        </td>
        <td>{bankAccount}</td>
        <td>${salary}</td>
        <td>
          <button
            disabled={verified ? false : true}
            onClick={() => setPayModal(true)}
            className="px-6 py-1 bg-green-100 text-green-500 rounded-full text-sm font-semibold disabled:text-errigalWhite disabled:bg-walrus"
          >
            Pay
          </button>
        </td>
        <td>
          <Link to={`/dashboard/details/${_id}`}>
            <button className="px-6 py-1 bg-blue-100 text-blue-500 rounded-full text-sm font-semibold">
              Details
            </button>
          </Link>
        </td>
      </tr>
      <Modal
        title={"Confirm Employee Verification"}
        description={
          "Are you sure you want to verify this employee? Please confirm your decision to complete the verification process."
        }
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handleAction={handleVerify}
      />
      <PayModal
        employee={employee}
        payModal={payModal}
        setPayModal={setPayModal}
        salaryPayDate={salaryPayDate}
        setSalaryPayDate={setSalaryPayDate}
        handlePay={handlePay}
      />
    </>
  );
};

export default TableRow;
