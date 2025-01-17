import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useState } from "react";
import EditWork from "./EditWork";

const FormModal = ({ modalOpen, setModalOpen, employeeTask, refetch }) => {
  return (
    <>
      {/* <button onClick={() => setModalOpen(true)}>Open dialog</button> */}
      <Dialog
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4 bg-black/70">
          <DialogPanel className="max-w-3xl space-y-4 border bg-white p-12 w-full rounded-lg">
            {/* <DialogTitle className="font-bold">Deactivate account</DialogTitle> */}
            <EditWork
              setModalOpen={setModalOpen}
              employeeTask={employeeTask}
              refetch={refetch}
            />
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default FormModal;
