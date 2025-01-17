import DatePicker from "react-datepicker";
import InputField from "../../components/shared/InputField/InputField";
import Button from "../../components/shared/Button/Button";
import { useState } from "react";
import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const EditWork = ({ setModalOpen, employeeTask, refetch }) => {
  const { task, hours, date, _id } = employeeTask;
  const [updatedDate, setUpdatedDate] = useState(date);
  const [updatedHours, setUpdateHours] = useState(hours);
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const handleHours = (e) => {
    const val = parseInt(e.target.value);
    if (val < 1) {
      setUpdateHours(1);
      toast.error("Hours cannot be less than 1!");
      return;
    } else {
      setUpdateHours(val);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const task = form.updatedTask.value;
    const hours = updatedHours;
    const date = updatedDate;
    const updatedTask = {
      name: user?.displayName,
      email: user?.email,
      task,
      hours,
      date,
    };
    console.log(updatedTask);
    try {
      await axiosSecure.put(`/employee/task/${_id}`, updatedTask);
      refetch();
      toast.success("Task updated successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong.");
    } finally {
      setModalOpen(false);
    }
  };

  return (
    <div className=" rounded-lg w-full">
      <h2 className="text-xl font-bold mb-6">Update your task</h2>
      <form onSubmit={handleUpdate} className="grid grid-cols-1 gap-4">
        <div className="w-full">
          <label htmlFor="task">Task</label>
          <select
            defaultValue={task}
            id="updatedTask"
            name="updatedTask"
            className="input-field !w-full bg-errigalWhite"
          >
            <option value="Sales">Sales</option>
            <option value="Support">Support</option>
            <option value="Content">Content</option>
            <option value="Paper Work">Paper Work</option>
          </select>
        </div>
        <InputField
          value={updatedHours}
          onChange={handleHours}
          label={"Hours Worked"}
          type={"number"}
          placeholder={"Hours"}
          id={"updatedHours"}
        />
        <div className="flex flex-col gap-1">
          <label className="capitalize font-semibold " htmlFor="date">
            Date:
          </label>
          <DatePicker
            id="date"
            selected={updatedDate}
            onChange={(date) => setUpdatedDate(date)}
            className="input-field !w-full"
          />
        </div>
        <Button label="Update" />
        <span
          onClick={() => setModalOpen(false)}
          className="btn !rounded-md py-2 text-lg border-2 border-midnightOcean bg-inherit text-midnightOcean hover:text-errigalWhite w-full block text-center"
        >
          Cancel
        </span>
      </form>
    </div>
  );
};

export default EditWork;
