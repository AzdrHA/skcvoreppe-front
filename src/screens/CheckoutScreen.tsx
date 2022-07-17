import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import {CheckoutForm} from '@app/component/form/CheckoutForm';

const stripePromise = loadStripe(process.env.STRIP_API_KEY as string);
export const CheckoutScreen = () => {
  return (
    <Elements stripe={stripePromise} options={{clientSecret: 'pi_3LM4m8BEVTa1BqkM0VWfvw4S_secret_PSvFlzg7kZnIBug27Df3aMjmj'}}>
      <CheckoutForm />
    </Elements>
  );
};
