const PaymentHistory = () => {
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
          <tr className="border-b *:px-4 *:py-2 hover:bg-whiteSmoke">
            <td>1</td>
            <td>January</td>
            <td>2025</td>
            <td>$250</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PaymentHistory;
