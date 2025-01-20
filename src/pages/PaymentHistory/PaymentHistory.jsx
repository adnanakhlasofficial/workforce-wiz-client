import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Loader from "../../components/shared/Loader/Loader";
import { format } from "date-fns";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: paymentHistories,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["paymentHistory", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure(
        `/employee/payment-history/${user?.email}`
      );
      return data;
    },
  });

  if (isLoading) return <Loader />;

  if (isError) return <p>{error.message}</p>;

  console.log(paymentHistories);

  return (
    <div className="w-full bg-white p-4 rounded-lg">
      <table className="w-full border">
        <thead className="border-b bg-olypurWhite rounded-lg">
          <tr className=" *:px-4 *:py-1 *:text-left">
            <th></th>
            <th>Month</th>
            <th>Year</th>
            <th>Amount</th>
            <th>Transaction ID</th>
          </tr>
        </thead>
        <tbody className="">
          {paymentHistories.map((payment, idx) => (
            <tr
              key={payment._id}
              className="border-b *:px-4 *:py-2 hover:bg-whiteSmoke"
            >
              <td>{idx + 1}</td>
              <td>{format(new Date(payment.paymentDate), "MMMM")}</td>
              <td>{format(new Date(payment.paymentDate), "yyyy")}</td>
              <td>${payment.salary}</td>
              <td>{payment.transactionId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentHistory;
