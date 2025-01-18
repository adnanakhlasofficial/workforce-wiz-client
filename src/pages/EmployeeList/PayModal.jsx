import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useState } from "react";
import PayForm from "./PayForm";
const PayModal = ({
  payModal,
  setPayModal,
  employee,
  salaryPayDate,
  setSalaryPayDate,
  handlePay,
}) => {
  return (
    <>
      {/* <button onClick={() => setModalOpen(true)}>Open dialog</button> */}
      <Dialog
        open={payModal}
        onClose={() => setPayModal(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4 bg-black/70">
          <DialogPanel className="max-w-xl space-y-4 border bg-white p-12 w-full rounded-lg">
            {/* <DialogTitle className="font-bold">Deactivate account</DialogTitle> */}
            <PayForm
              setIsOpen={setPayModal}
              employee={employee}
              salaryPayDate={salaryPayDate}
              setSalaryPayDate={setSalaryPayDate}
              handlePay={handlePay}
            />
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default PayModal;
