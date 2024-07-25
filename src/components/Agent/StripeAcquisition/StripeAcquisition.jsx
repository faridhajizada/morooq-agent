import React, { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm"; // создайте этот компонент для формы платежа

const stripePromise = loadStripe("pk_test_mAu0YX27q4uYAhqiP6LXOFhj");

function StripeAcquisition({ paymentId }) {
  useEffect(() => {}, [paymentId]);

  const appearance = {
    theme: "night",
    labels: "floating",
  };
  const options = {
    clientSecret,
    appearance,
  };
  return (
    <Elements options={options} stripe={stripePromise}>
      <CheckoutForm paymentId={paymentId} />
    </Elements>
  );
}

export default StripeAcquisition;
