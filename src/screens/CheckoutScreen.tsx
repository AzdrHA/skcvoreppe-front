import React, {useEffect, useState} from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import {CheckoutForm} from '@app/component/form/CheckoutForm';
import {orderCheckoutRequest} from '@app/api/orderRequest';
import {useAppSelector} from '@app/reducer/hook';
import {RootState} from '@app/reducer/store';

const stripePromise = loadStripe(process.env.STRIP_API_KEY as string);
export const CheckoutScreen = () => {
  const user = useAppSelector((state: RootState) => state.user);
  const [isLoading, setLoading] = useState<{amount_subtotal: number, amount_total:number, client_secret:string}|null>(null);

  useEffect(() => {
    if (user.card) {
      orderCheckoutRequest(user.card.id).then((r) => {
        setLoading(r);
      });
    }
  }, [user]);

  return !isLoading ? <div>LOADING</div> : <Elements stripe={stripePromise} options={{clientSecret: isLoading.client_secret}}>
    <CheckoutForm amount_subtotal={isLoading.amount_subtotal} amount_total={isLoading.amount_subtotal} />
  </Elements>;
};
