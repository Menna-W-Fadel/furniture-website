import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

import { useState } from "react";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setLoading(true);
    setMessage("");

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/success`,
      },
    });

    if (error) {
      setMessage(error.message);
      setLoading(false);
    }
  };

  if (!stripe || !elements) {
    return (
      <div style={{ textAlign: "center", padding: 40, color: "var(--color-text)" }}>
        Loading payment form...
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ width: "100%" }}>
      <div style={{ minHeight: 300, padding: "16px 0" }}>
        <PaymentElement />
      </div>

      {message && (
        <div style={{
          marginTop: 16,
          padding: "12px 16px",
          borderRadius: 8,
          backgroundColor: "rgba(198,40,40,0.08)",
          border: "1px solid rgba(198,40,40,0.25)",
          color: "#c62828",
          fontSize: 14,
          textAlign: "center",
        }}>
          {message}
        </div>
      )}

      <button
        disabled={!stripe || loading}
        className="btn-primary"
        style={{ display: "block", margin: "20px auto 0", minWidth: 200 }}
      >
        {loading ? "Processing..." : "Pay Now"}
      </button>
    </form>
  );
};

export default CheckoutForm;
