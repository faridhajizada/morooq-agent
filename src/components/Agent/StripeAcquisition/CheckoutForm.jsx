// CheckoutForm.js
import { useEffect, useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

export default function CheckoutForm({ paymentId }) {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const retrievePaymentIntent = async (clientSecret) => {
      try {
        const { paymentIntent } = await stripe.retrievePaymentIntent(clientSecret);
        switch (paymentIntent.status) {
          case "succeeded":
            setMessage("Payment succeeded!");
            break;
          case "processing":
            setMessage("Your payment is processing.");
            break;
          case "requires_payment_method":
            setMessage("Your payment was not successful, please try again.");
            break;
          default:
            setMessage("Something went wrong.");
            break;
        }
      } catch (error) {
        setMessage("Error retrieving payment intent.");
      }
    };

    if (stripe) {
      const clientSecret = new URLSearchParams(window.location.search).get(
        "payment_intent_client_secret"
      );

      if (clientSecret) {
        retrievePaymentIntent(clientSecret);
      }
    }
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    if (!paymentId) {
      setMessage("Payment ID is missing.");
      return;
    }

    setIsLoading(true);

    try {
      const { error: confirmError } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: "http://localhost:5173/status",
        },
      });

      if (confirmError) {
        if (confirmError.type === "card_error" || confirmError.type === "validation_error") {
          setMessage(confirmError.message);
        } else {
          setMessage("An unexpected error occurred.");
        }
        setIsLoading(false);
        return;
      }

      // Отправка данных на сервер
      const response = await fetch(
        "http://morooq.az/webservice/api/payments/agent/ticket/pay",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ paymentId }),
        }
      );

      const data = await response.json();
      if (data.paymentIntent && data.paymentIntent.status === "succeeded") {
        setMessage("Payment confirmed successfully.");
        window.location.href = "http://localhost:5173/status";
      } else {
        setMessage("Failed to confirm payment.");
      }
    } catch (error) {
      console.error("Error confirming payment:", error);
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: "tabs",
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement id="payment-element" options={paymentElementOptions} />
      <button
        disabled={isLoading || !stripe || !elements || !paymentId}
        id="submit"
      >
        <span id="button-text text-center">
          {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
        </span>
      </button>
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
}
