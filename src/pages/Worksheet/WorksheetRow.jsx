import { format } from "date-fns";
import Modal from "../../components/shared/Modal/Modal";
import { useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { toast } from "react-toastify";

const WorksheetRow = ({ employeeTask, idx, refetch }) => {
  const { task, hours, date, _id } = employeeTask;
  let [isOpen, setIsOpen] = useState(false);
  const axiosSecure = useAxiosSecure();

  const handleDelete = async () => {
    try {
      await axiosSecure.delete(`/employee/task/${_id}`);
      toast.success("Task deleted successfully!");
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
        <td className="text-right">{idx + 1}</td>
        <td>{task}</td>
        <td className="text-right">{hours}</td>
        <td className="text-right">{format(new Date(date), "P")}</td>
        <td className="text-xs font-bold text-center ">
          <button className="px-4 py-1 w-full bg-green-500/15 text-green-600 rounded-full">
            Edit
          </button>
        </td>
        <td className="text-xs font-bold text-center ">
          <button
            onClick={() => setIsOpen(true)}
            className="px-4 py-1 w-full bg-red-500/15 text-red-600 rounded-full"
          >
            Delete
          </button>
        </td>
      </tr>
      <Modal
        title={"Confirm Task Deletion"}
        description={
          "Are you sure you want to delete this task? Please confirm your decision to proceed with the deletion."
        }
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handleAction={handleDelete}
      />
    </>
  );
};

export default WorksheetRow;
