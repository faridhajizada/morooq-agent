import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('YOUR_PUBLISHABLE_KEY'); // replace with your actual Stripe publishable key

const StripeAcquisition = ({ paymentId }) => {
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    if (paymentId) {
      const fetchClientSecret = async () => {
        try {
          const response = await fetch(`http://morooq.az/webservice/api/payments/agent/ticket/pay`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              PaymentId: paymentId,
              StripePaymentId: paymentId, // Use the correct ID
              AgentOrderId: paymentId, // Use the correct ID
              statusId: 'your-status-id' // replace with actual statusId
            })
          });

          if (!response.ok) {
            throw new Error('Network response was not ok');
          }

          const data = await response.json();
          setClientSecret(data.clientSecret);
        } catch (error) {
          console.error('Error fetching client secret:', error);
        }
      };

      fetchClientSecret();
    }
  }, [paymentId]);

  return (
    <div>
      {clientSecret && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
};

export default StripeAcquisition;
