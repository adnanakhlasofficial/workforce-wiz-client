import InputField from "../../components/shared/InputField/InputField";
import Button from "../../components/shared/Button/Button";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { toast } from "react-toastify";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import Loader from "../../components/shared/Loader/Loader";
import WorksheetRow from "./WorksheetRow";
import useUser from "../../hooks/useUser";

const Worksheet = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [hour, setHours] = useState(1);
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data } = useUser();

  const {
    data: tasks,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["tasks", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure(`/employee/tasks/${user?.email}`);
      return data;
    },
  });

  const handleHours = (e) => {
    const val = parseInt(e.target.value);
    if (val < 1) {
      setHours(1);
      toast.error("Hours cannot be less than 1!");
      return;
    } else {
      setHours(val);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    const form = e.target;
    const task = form.task.value;
    const hours = hour;
    const date = startDate;
    const taskInfo = {
      name: user?.displayName,
      email: user?.email,
      designation: data?.designation,
      hours,
      date,
      task,
    };
    console.log(taskInfo);
    try {
      await axiosSecure.post("/employee/task", taskInfo);
      toast.success("Task added successfully!");
      refetch();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong.");
    }
  };

  if (isLoading) return <Loader />;

  if (isError) return <p>{error.message}</p>;

  return (
    <section className="flex flex-col-reverse gap-2">
      {/* table */}
      <div className="w-full bg-white p-4 rounded-lg">
        <h2 className="text-xl font-bold mb-6">
          Your completed tasks ({tasks.length})
        </h2>
        <div className="overflow-auto">
          <table className="w-full border">
            <thead className="border-b bg-olypurWhite rounded-lg">
              <tr className=" *:px-4 *:py-1 *:text-left">
                <th></th>
                <th>Task</th>
                <th className="!text-right">Hours</th>
                <th className="!text-right">Date</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody className="">
              {tasks.map((task, idx) => (
                <WorksheetRow
                  key={task._id}
                  employeeTask={task}
                  idx={idx}
                  refetch={refetch}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* form */}
      <div className=" rounded-lg w-full bg-white p-4 shadow-lg">
        <h2 className="text-xl font-bold mb-6">Submit your task</h2>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-3 items-end gap-4"
        >
          <div className="w-full">
            <label htmlFor="task">Task:</label>
            <select
              id="task"
              name="task"
              className="input-field !w-full bg-errigalWhite"
            >
              <option value="Sales">Sales</option>
              <option value="Support">Support</option>
              <option value="Content">Content</option>
              <option value="Paper Work">Paper Work</option>
            </select>
          </div>
          <InputField
            value={hour}
            onChange={handleHours}
            label={"Hours"}
            type={"number"}
            placeholder={"Hours"}
            id={"hours"}
          />
          <div className="flex flex-col gap-1">
            <label className="capitalize font-semibold " htmlFor="date">
              Date:
            </label>
            <DatePicker
              id="date"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="input-field !w-full"
            />
          </div>
          <Button label="Submit" />
        </form>
      </div>
    </section>
  );
};

export default Worksheet;
