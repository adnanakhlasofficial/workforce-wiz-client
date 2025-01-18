import React, { useState } from "react";
import InputField from "../../components/shared/InputField/InputField";
import DatePicker from "react-datepicker";
import Button from "../../components/shared/Button/Button";

const PayForm = ({
  setIsOpen,
  employee,
  salaryPayDate,
  setSalaryPayDate,
  handlePay,
}) => {
  const { _id, name, email, bankAccount, salary } = employee;

  return (
    <div className=" rounded-lg w-full">
      <h2 className="text-xl font-bold mb-6">Pay your Employee</h2>
      <form onSubmit={handlePay} className="grid grid-cols-1 gap-4">
        <div className="flex flex-col gap-1">
          <h3 className="capitalize font-medium">Name:</h3>
          <span>{name}</span>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="capitalize font-medium">Email:</h3>
          <span>{email}</span>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="capitalize font-medium">Salary:</h3>
          <span>${salary}</span>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="capitalize font-medium">Bank Account:</h3>
          <span>{bankAccount}</span>
        </div>
        <div className="flex flex-col gap-1">
          <label className="capitalize font-medium" htmlFor="date">
            Date:
          </label>
          <DatePicker
            id="date"
            selected={salaryPayDate}
            onChange={(date) => setSalaryPayDate(date)}
            className="input-field !w-full"
          />
        </div>
        <Button label="Pay" />
        <span
          onClick={() => setIsOpen(false)}
          className="btn !rounded-md py-2 text-lg border-2 border-midnightOcean bg-inherit text-midnightOcean hover:text-errigalWhite w-full block text-center"
        >
          Cancel
        </span>
      </form>
    </div>
  );
};

export default PayForm;
