import { format } from "date-fns";

const PayRow = ({ payroll, idx }) => {
  console.log(payroll);
  const { name, email, designation, date, bankAccount, salary, _id } = payroll;

  return (
    <>
      <tr className="border-b *:px-4 *:py-2 hover:bg-whiteSmoke">
        <td>{idx + 1}</td>
        <td>{name}</td>
        <td>{email}</td>
        <td>{designation}</td>
        <td>{format(new Date(date), "PP")}</td>
        <td>${salary}</td>
        <td>{bankAccount}</td>
        <td>
          <button className="px-6 py-1 bg-green-100 text-green-500 rounded-full text-sm font-semibold disabled:text-errigalWhite disabled:bg-walrus">
            Pay
          </button>
        </td>
        <td>Payment Date</td>
      </tr>
    </>
  );
};

export default PayRow;
