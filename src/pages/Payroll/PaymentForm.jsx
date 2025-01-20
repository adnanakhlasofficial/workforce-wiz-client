// This example shows you how to set up React Stripe.js and use Elements.
// Learn how to accept a payment using the official Stripe docs.
// https://stripe.com/docs/payments/accept-a-payment#web

import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";

import "./PaymentForm.css";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { toast } from "react-toastify";

const PaymentForm = ({
  setIsOpen,
  userId,
  handlePay,
  setTransactionId,
  refetch,
}) => {
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    pay();
  }, [userId]);

  const pay = async () => {
    try {
      const { data } = await axiosSecure.post("/create-payment", {
        userId: userId?._id,
      });
      setClientSecret(data.clientSecret);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(clientSecret);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }

    // Confirm payment
    const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          name: userId?.name,
          email: userId?.email,
        },
      },
    });
    if (paymentIntent.status === "succeeded") {
      try {
        await axiosSecure.patch(`/employee/payment/${userId?.email}`, {
          paymentDate: new Date(),
          transactionId: paymentIntent?.id,
        });
        toast.success("Salary has been successfully paid to the employee.");
        refetch();
        setIsOpen(false);
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong.");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <div className="flex gap-2 w-full flex-row-reverse">
        <button className="btn block w-full" type="submit" disabled={!stripe}>
          Pay
        </button>
        <button
          className="btn bg-inherit text-midnightOcean hover:bg-midnightOcean hover:text-errigalWhite border-2 border-midnightOcean block w-full"
          onClick={() => setIsOpen(false)}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default PaymentForm;
