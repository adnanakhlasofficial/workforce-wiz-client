import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const PaymentModal = ({
  setIsOpen,
  isOpen,
  refetch,
  userId,
  handlePay,
  setTransactionId,
}) => {
  return (
    <>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={() => setIsOpen(false)}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 bg-black/30">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle
                as="h3"
                className="text-lg font-medium text-cocoBlack"
              >
                Payment successful
              </DialogTitle>

              <Elements stripe={stripePromise}>
                <PaymentForm
                  setIsOpen={setIsOpen}
                  refetch={refetch}
                  userId={userId}
                  handlePay={handlePay}
                  setTransactionId={setTransactionId}
                />
              </Elements>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default PaymentModal;
