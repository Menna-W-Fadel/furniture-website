import { loadStripe } from "@stripe/stripe-js";

export const stripePromise = loadStripe(
  "pk_test_51TTNsjAM21DpWOYIGY7DTGmJAf9ydWYUiDArFXOeSTfKeJ3K2WYSIPvui0avlQ7QwU4r5jbVdU9QNdQK4c3GRy5y00fVw3gxRh"
);