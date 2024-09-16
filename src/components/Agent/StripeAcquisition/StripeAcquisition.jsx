import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useLocation } from "react-router-dom";

const stripePromise = loadStripe("pk_test_mAu0YX27q4uYAhqiP6LXOFhj");

const StripeAcquisition = () => {
  const location = useLocation();
  const responseBody = location.state?.responseBody;

  console.log("---responseBody---", responseBody);
  const [clientSecret, setClientSecret] = useState("");
  const [paymentIntendId, setPaymentIntendId] = useState("");

  useEffect(() => {
    if (responseBody) {
      setClientSecret(responseBody.ClientSecret);
      setPaymentIntendId(responseBody.PaymentIntentId);
    }
  }, [responseBody]);

  useEffect(() => {
    if (responseBody) {
      localStorage.setItem("PaymentId", responseBody.PaymentId);
      localStorage.setItem("StripePaymentId", responseBody.StripePaymentId);
      localStorage.setItem("AgentOrderId", responseBody.AgentOrderId);
      localStorage.setItem("PaymentIntentId", responseBody.PaymentIntentId);
    }
  }, [responseBody]);

  const appearance = {
    theme: "night",
    labels: "floating",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div>
      {clientSecret && (
        <Elements stripe={stripePromise} options={options}>
          <CheckoutForm paymentId={paymentIntendId} />
        </Elements>
      )}
    </div>
  );
};

export default StripeAcquisition;
