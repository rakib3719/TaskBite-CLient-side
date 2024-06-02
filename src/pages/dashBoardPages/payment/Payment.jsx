import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useParams } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";




const stripePromise = loadStripe(import.meta.env.VITE_Payment_PK)

const Payment = () => {


    const price = parseInt(useParams().price);
    const purcessCoin = price === 1 ? 10 : price === 9 ? 100 : price === 19 ? 500 : price === 39? 1000 : 0;
    console.log(purcessCoin);
    return (
        <div>

   
     <Elements stripe={stripePromise}>

<CheckoutForm

price={price}
purcessCoin={purcessCoin}

></CheckoutForm>

     </Elements>
        </div>
    );
};

export default Payment;