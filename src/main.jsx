import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./App.jsx";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ProductsProvider } from "./context/productsContext";
import {CartProvider} from "./context/cartContext";
import {AuthProvider} from "./context/authContext";
import {FavoritesProvider } from "./context/favouritesContext";
import { Elements } from "@stripe/react-stripe-js";
import { stripePromise } from "./stripe";

createRoot(document.getElementById("root")).render(
  <Elements stripe={stripePromise}>
    <FavoritesProvider>
    <CartProvider>
      <ProductsProvider>
        <AuthProvider>
        <App />
        </AuthProvider>
      </ProductsProvider>
    </CartProvider>
    </FavoritesProvider>
  </Elements>,
);
