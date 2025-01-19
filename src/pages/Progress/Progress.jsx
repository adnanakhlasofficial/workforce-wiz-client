import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { format } from "date-fns";
import Loader from "../../components/shared/Loader/Loader";
import { useState } from "react";

const Progress = () => {
  const axiosSecure = useAxiosSecure();
  const [fetchEmail, setEmail] = useState(null);

  const {
    data: tasks,
    isLoading: taskLoading,
    isError: isTaskError,
    error: taskError,
    refetch: taskRefetch,
  } = useQuery({
    queryKey: ["tasks", fetchEmail],
    queryFn: async () => {
      if (fetchEmail) {
        const { data } = await axiosSecure(`/progress?email=${fetchEmail}`);
        return data;
      } else {
        const { data } = await axiosSecure(`/progress`);
        return data;
      }
    },
  });

  const {
    data: emails,
    isLoading: emailsLoading,
    isError: isEmailError,
    error: emailError,
  } = useQuery({
    queryKey: ["emails"],
    queryFn: async () => {
      const { data } = await axiosSecure("/progress/emails");
      return data;
    },
  });

  if (taskLoading || emailsLoading) return <Loader />;

  if (isTaskError || isEmailError)
    return <p>{taskError.message || emailError.message}</p>;

  const handleFetchEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="w-full bg-white p-4 rounded-lg">
      <div className="mb-6">
        <h2 className="text-xl font-bold ">
          Your completed tasks ({tasks.length})
        </h2>
        <div>
          <div className="w-full">
            <label htmlFor="task">Email:</label>
            <select
              id="email"
              name="email"
              onChange={handleFetchEmail}
              className="input-field !w-full bg-errigalWhite"
            >
              {emails.map((email, idx) => (
                <option key={idx} value={email.email}>
                  {email.email}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="overflow-auto">
        <table className="w-full border">
          <thead className="border-b bg-olypurWhite rounded-lg">
            <tr className=" *:px-4 *:py-1 *:text-left">
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Task</th>
              <th className="!text-right">Hours</th>
              <th className="!text-right">Date</th>
            </tr>
          </thead>
          <tbody className="">
            {tasks.map((task, idx) => (
              <tr
                key={task._id}
                className=" *:px-4 *:py-1 *:text-left border-b"
              >
                <td className="!text-right">{idx + 1}</td>
                <td>{task.name}</td>
                <td>{task.email}</td>
                <td>{task.task}</td>
                <td className="!text-right">{task.hours}</td>
                <td className="!text-right">
                  {format(new Date(task.date), "P")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Progress;
