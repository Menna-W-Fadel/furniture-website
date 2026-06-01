import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

import { useState } from "react";

const CheckoutForm = ({ clientSecret }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setLoading(true);

    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:5173/success",
      },
    });

    if (result.error) {
      console.log(result.error.message);
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} style={{width:"98%" , marginLeft:10, marginTop:10}}>
      <PaymentElement />

      <button disabled={!stripe || loading} className="btn-primary" style={{marginTop:20,marginLeft:50}}>
        {loading ? "Processing..." : "Pay Now"}
      </button>
    </form>
  );
};

export default CheckoutForm;