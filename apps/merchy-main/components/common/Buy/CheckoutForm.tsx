import React, { useEffect, useState } from 'react';
import {
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { Box, Button } from '@chakra-ui/react';

export default function CheckoutForm({ setPageState, clientSecret }) {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case 'succeeded':
          setMessage('Payment succeeded!');
          break;
        case 'processing':
          setMessage('Your payment is processing.');
          break;
        case 'requires_payment_method':
          setMessage('');
          break;
        default:
          setMessage('Something went wrong.');
          break;
      }
    });
  }, [stripe, clientSecret]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    console.log('elements', elements);
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: 'http://localhost:4200',
      },
    });

    if (error.type === 'card_error' || error.type === 'validation_error') {
      setMessage(error.message);
    } else {
      setMessage('An unexpected error occurred.');
    }

    setIsLoading(false);
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement id="payment-element" />
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        w="100%"
        pt="3"
      >
        <Button
          variant="login"
          h="42px"
          fontFamily="suisseIntlRegular"
          onClick={() => setPageState('landing')}
        >
          Cancel
        </Button>
        <Button
          id="submit"
          disabled={isLoading || !stripe || !elements}
          variant="signup"
          h="42px"
          fontFamily="suisseIntlRegular"
          onClick={handleSubmit}
        >
          {isLoading ? (
            <div className="spinner" id="spinner"></div>
          ) : (
            'Submit Credit Card'
          )}
        </Button>
      </Box>
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
}
