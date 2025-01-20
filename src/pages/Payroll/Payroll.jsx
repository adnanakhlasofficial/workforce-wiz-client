import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Loader from "../../components/shared/Loader/Loader";
import PayRow from "./PayRow";

const Payroll = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: payrolls,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["payrolls"],
    queryFn: async () => {
      const { data } = await axiosSecure("/employee/payrolls");
      return data;
    },
  });

  if (isLoading) return <Loader />;

  if (isError) return <p>{error.message}</p>;

  return (
    <div className="w-full bg-white p-4 rounded-lg">
      <h2 className="text-xl font-bold mb-6">Payroll ({payrolls.length})</h2>
      <div className="overflow-auto">
        <table className="w-full border">
          <thead className="border-b bg-olypurWhite rounded-lg">
            <tr className=" *:px-4 *:py-1 *:text-left">
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Designation</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Bank Account</th>
              <th>Pay</th>
              <th>Payment Date</th>
            </tr>
          </thead>
          <tbody>
            {payrolls.map((payroll, idx) => (
              <PayRow
                key={payroll._id}
                payroll={payroll}
                idx={idx}
                refetch={refetch}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Payroll;
