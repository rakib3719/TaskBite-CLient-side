import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import useAxiosSecure from '../../../hook/useAxiosSecure';
import toast, { Toaster } from 'react-hot-toast';
import useIncreaseCoin from '../../../hook/useIncreaseCoin';

const CheckoutForm = ({ price, purcessCoin }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const [increaseCoin] = useIncreaseCoin()

  useEffect(() => {
    axiosSecure.post('/create-payment-intent', { price: price })
      .then(res => {
        console.log('Client Secret:', res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      })
      .catch(err => {
        console.error('Error fetching client secret:', err);
        setError('Failed to initialize payment.');
      });
  }, [axiosSecure, price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    // Create Payment Method
    const { error: createError, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
      billing_details: {
        email: user?.email || 'anonymous',
        name: user?.displayName || 'anonymous'
      }
    });

    if (createError) {
      console.error('Create Payment Method Error:', createError);
      setError(createError.message);
      return;
    } else {
      console.log('PaymentMethod:', paymentMethod);
      setError('');
    }

    // Confirm Card Payment
    const { error: confirmError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: paymentMethod.id
    });

    if (confirmError) {
      console.error('Confirm Card Payment Error:', confirmError);
      setError(confirmError.message);
    } else {
      console.log('Payment Intent:', paymentIntent);
      setError('');
    }

    if (paymentIntent && paymentIntent.status === "succeeded") {
      toast.success("Payment Successful");

      // update coin
      increaseCoin(parseInt(purcessCoin));

      // save to database
      const paymentData = {
        email: user?.email,
        paid_amount: price,
        purcess_coin: purcessCoin,
        date: new Date(),
        trxId: paymentIntent.id
      }

      const res = await axiosSecure.post('/paymentHistory', paymentData);
      console.log(res.data);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mt-12 mx-auto p-6 bg-gray-800 rounded-lg shadow-md">
      <Toaster />
      <div className="mb-4">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#FFFFFF',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#FF0000',
              },
            },
          }}
          className="p-3 border border-gray-600 rounded bg-gray-700 text-white"
        />
      </div>
      <button
        type="submit"
        disabled={!stripe || !elements}
        className="w-full py-2 px-4 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 disabled:bg-gray-600 disabled:cursor-not-allowed"
      >
        Pay
      </button>

      {error && (
        <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          <p className="text-sm">{error}</p>
        </div>
      )}
    </form>
  );
};

export default CheckoutForm;
