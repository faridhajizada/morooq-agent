import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useLocation } from "react-router-dom";

const stripePromise = loadStripe("YOUR_PUBLISHABLE_KEY"); // replace with your actual Stripe publishable key

const StripeAcquisition = () => {
  const [clientSecret, setClientSecret] = useState("");
  const location = useLocation();
  const responseBody = location.state?.responseBody;

  console.log("responseBody.AgentOrderId", responseBody.AgentOrderId);
  console.log("responseBody.PaymentId", responseBody.PaymentId);
  console.log("responseBody.StripePaymentId", responseBody.StripePaymentId);

  useEffect(() => {
    const fetchClientSecret = async () => {
      try {
        const response = await fetch(
          `http://morooq.az/webservice/api/payments/agent/ticket/pay?statusId=successed`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              responseBody,
            }),
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setClientSecret(data.clientSecret);
        console.log("Client Secret:", data.clientSecret);
      } catch (error) {
        console.error("Error fetching client secret:", error);
      }
    };

    fetchClientSecret();
  }, []);

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
      {
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      }
    </div>
  );
};

export default StripeAcquisition;
