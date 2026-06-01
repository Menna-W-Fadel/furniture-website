import { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";
import { stripePromise } from "../stripe";
import { useCart } from "../context/cartContext";

//4242 4242 4242 4242
const CheckoutPage = () => {
  const [clientSecret, setClientSecret] = useState("");
const { cartItems } = useCart();
  useEffect(() => {
    fetch("http://localhost:4000/create-payment-intent", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      cartItems: cartItems.map((item) => ({
        finalPrice: item.finalPrice,
        quantity: item.quantity,
      })),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
      });
  }, []);

  return (
    <>
      {clientSecret && (
        <Elements
          stripe={stripePromise}
          options={{ clientSecret }}
        >
          <CheckoutForm />
        </Elements>
      )}
    </>
  );
};

export default CheckoutPage;
