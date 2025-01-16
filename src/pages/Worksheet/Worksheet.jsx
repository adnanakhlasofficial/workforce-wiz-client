import InputField from "../../components/shared/InputField/InputField";
import Button from "../../components/shared/Button/Button";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { toast } from "react-toastify";
import { format } from "date-fns";
const Worksheet = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [hours, setHours] = useState(1);

  console.log(hours);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const task = form.task.value;
    const hours = form.hours.value;
    const date = startDate;
    console.log({ task, hours, date });
  };

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

  return (
    <section className="flex gap-2">
      <div className="w-full bg-white p-4 rounded-lg">
        <table className="w-full border">
          <thead className="border-b bg-olypurWhite rounded-lg">
            <tr className=" *:px-4 *:py-1">
              <th></th>
              <th>Task</th>
              <th>Hour</th>
              <th>Data</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody className="">
            <tr className="border-b *:px-4 *:py-2 hover:bg-whiteSmoke">
              <td className="text-right">1</td>
              <td>Sales</td>
              <td className="text-right">5</td>
              <td className="text-right">{format(new Date(startDate), "P")}</td>
              <td className="text-xs font-medium text-center ">
                <button className="px-4 py-1 w-full bg-green-500/15 text-green-600 rounded-full">
                  Edit
                </button>
              </td>
              <td className="text-xs font-medium text-center ">
                <button className="px-4 py-1 w-full bg-red-500/15 text-red-600 rounded-full">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className=" rounded-lg max-w-sm w-full !bg-white !opacity-100 p-4 shadow-lg">
        <h2 className="text-xl font-bold mb-6">Create Your Profile</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
          <div className="w-full">
            <label htmlFor="task">Task</label>
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
            value={hours}
            onChange={handleHours}
            label={"Hours Worked"}
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
