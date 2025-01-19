import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

import InputField from "../../components/shared/InputField/InputField";

const SetSalaryModal = ({
  handleSalary,
  employeeSalary,
  isOpen,
  setIsOpen,
  updateSalary,
}) => {
  return (
    <>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={() => setIsOpen(false)}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-black/30">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-whiteSmoke  p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle
                as="h3"
                className="text-lg font-medium text-cocoBlack"
              >
                Set your employee salary
              </DialogTitle>
              <div className="mt-4">
                <InputField
                  label={"Salary"}
                  type={"number"}
                  placeholder={"Enter employee salary"}
                  onChange={handleSalary}
                  value={employeeSalary}
                />
                <div className="mt-2 flex gap-2">
                  <button onClick={updateSalary} className="btn">
                    Update Salary
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="btn border-2 border-primary bg-inherit text-cocoBlack hover:bg-midnightOcean hover:text-white"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default SetSalaryModal;
