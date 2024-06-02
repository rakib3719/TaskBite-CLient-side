import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useState } from 'react';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    // Add your payment processing logic here

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('error', error);
      setError(error.message);
    } else {
      console.log('PaymentMethod', paymentMethod);
      setError('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mt-12 mx-auto p-6 bg-gray-800 rounded-lg shadow-md">
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
        disabled={!stripe}
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
