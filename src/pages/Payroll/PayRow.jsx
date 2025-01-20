import { format } from "date-fns";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { toast } from "react-toastify";
import PaymentModal from "./PaymentModal";
import { useState } from "react";

const PayRow = ({ payroll, idx, refetch }) => {
  const axiosSecure = useAxiosSecure();
  let [isOpen, setIsOpen] = useState(false);
  const [transactionId, setTransactionId] = useState();

  const {
    name,
    email,
    designation,
    date,
    bankAccount,
    salary,
    _id,
    paymentDate,
  } = payroll;

  console.log(paymentDate);

  const handlePay = async () => {
    try {
      await axiosSecure.patch(`/employee/payment/${email}`, {
        paymentDate: new Date(),
        transactionId,
      });
      toast.success("Salary has been successfully paid to the employee.");
      refetch();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong.");
    }
  };

  return (
    <>
      <tr className="border-b *:px-4 *:py-2 hover:bg-whiteSmoke">
        <td>{idx + 1}</td>
        <td>{name}</td>
        <td>{email}</td>
        <td>{designation}</td>
        <td>{format(new Date(date), "MMMM-yyyy")}</td>
        <td>${salary}</td>
        <td>{bankAccount}</td>
        <td>
          <button
            disabled={
              paymentDate &&
              format(new Date(paymentDate), "MMMM-yyyy") ===
                format(new Date(date), "MMMM-yyyy")
            }
            onClick={() => setIsOpen(true)}
            className="px-6 py-1 bg-green-100 text-green-500 rounded-full text-sm font-semibold disabled:text-errigalWhite disabled:bg-walrus"
          >
            {paymentDate &&
            format(new Date(paymentDate), "MMMM-yyyy") ===
              format(new Date(date), "MMMM-yyyy")
              ? "Paid"
              : "Pay"}
          </button>
        </td>
        <td>
          {(paymentDate && format(new Date(paymentDate), "MMMM-yyyy")) || ""}
        </td>
      </tr>
      <PaymentModal
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        refetch={refetch}
        userId={payroll}
        handlePay={handlePay}
        setTransactionId={setTransactionId}
      />
    </>
  );
};

export default PayRow;
