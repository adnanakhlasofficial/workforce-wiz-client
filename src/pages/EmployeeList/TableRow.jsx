import { CgClose } from "react-icons/cg";
import Modal from "../../components/shared/Modal/Modal";
import { useState } from "react";
import { toast } from "react-toastify";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FaCheck } from "react-icons/fa6";

const TableRow = ({ employee, idx, refetch }) => {
  const axiosSecure = useAxiosSecure();
  let [isOpen, setIsOpen] = useState(false);

  const { _id, name, email, verified, bankAccount, salary } = employee;

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
        <td>Pay</td>
        <td>Details</td>
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
    </>
  );
};

export default TableRow;
