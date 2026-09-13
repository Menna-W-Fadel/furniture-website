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
import {SnackbarProvider} from "./context/snackbarContext";

createRoot(document.getElementById("root")).render(
    <SnackbarProvider>
    <FavoritesProvider>
    <CartProvider>
      <ProductsProvider>
        <AuthProvider>
        <App />
        </AuthProvider>
      </ProductsProvider>
    </CartProvider>
    </FavoritesProvider>
    </SnackbarProvider>,
);
