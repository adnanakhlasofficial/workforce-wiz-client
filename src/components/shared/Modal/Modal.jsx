import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useState } from "react";

const Modal = ({ isOpen, setIsOpen, handleAction, title, description }) => {
  return (
    <>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg  border bg-whiteSmoke p-12 rounded-lg">
            <DialogTitle className="font-bold text-cocoBlack mb-2">
              {title}
            </DialogTitle>
            <Description className="text-iron">{description}</Description>
            <div className="flex gap-4 mt-4">
              <button className="btn" onClick={() => setIsOpen(false)}>
                No
              </button>
              <button
                className="btn border-2 border-primary bg-inherit text-cocoBlack hover:text-errigalWhite"
                onClick={handleAction}
              >
                Yes
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default Modal;
