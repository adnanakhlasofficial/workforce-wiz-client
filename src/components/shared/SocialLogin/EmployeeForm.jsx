import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";
import InputField from "../InputField/InputField";
import Button from "../Button/Button";

const EmployeeForm = ({
  isOpen,
  setIsOpen,
  handleInfoSubmit,
  employeeDesignation,
  setEmployeeDesignation,
  user,
}) => {
  return (
    <>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 bg-black/30">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle
                as="h3"
                className="text-xl font-semibold mb-6 text-cocoBlack"
              >
                Hello {user?.displayName}, Fill your details
              </DialogTitle>
              <div className=" rounded-lg max-w-sm w-full">
                <form
                  onSubmit={handleInfoSubmit}
                  className="grid grid-cols-1 gap-4"
                >
                  <div className="flex flex-col gap-1">
                    <label
                      className="capitalize font-semibold "
                      htmlFor="designation"
                    >
                      Designation:
                    </label>
                    <select
                      value={employeeDesignation}
                      onChange={(e) => setEmployeeDesignation(e.target.value)}
                      required
                      id="googleDesignation"
                      name="googleDesignation"
                      className="input-field !w-full"
                    >
                      <option disabled value="Select Designation">
                        Select Designation
                      </option>
                      <option value="Sales Assistant">Sales Assistant</option>
                      <option value="Social Media executive">
                        Social Media executive
                      </option>
                      <option value="Digital Marketer">Digital Marketer</option>
                      <option value="Paper Work">Paper Work</option>
                    </select>
                  </div>

                  <InputField
                    label={"salary"}
                    type={"number"}
                    id={"googleSalary"}
                    placeholder={"Enter your salary"}
                  />

                  <InputField
                    label={"bank account"}
                    type={"number"}
                    id={"googleBankAccount"}
                    placeholder={"Enter your bank account"}
                  />

                  <Button label={"Submit"} />
                </form>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default EmployeeForm;
