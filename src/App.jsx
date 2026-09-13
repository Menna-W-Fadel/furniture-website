import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home_page";
import AboutPage from "./pages/about_page";
import ContactPage from "./pages/contact_page";
import FavouritesPage from "./pages/favourites_page";
import SigninPage from "./pages/signin_Page";
import SignupPage from "./pages/signup_page";
import ShopPage from "./pages/shop_page";
import CartPage from "./pages/cart_page";
import CheckoutPage from "./pages/checkout_page";
import ProtectedRoute from "./routes/ProtectedRoute";
import ProductDetailsPage from "./pages/products_details_Page";
import SuccessPayPage from "./pages/success_pay_page";
import NotFound from "./pages/not_found_page";
import Layout from "./pages/layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "shop", element: <ShopPage /> },
        { path: "shop/:slug", element: <ProductDetailsPage /> },
        { path: "about", element: <AboutPage /> },
        { path: "contact", element: <ContactPage /> },
        { path: "favorites", element: <FavouritesPage /> },
        { path: "cart", element: <CartPage /> },
        { path: "login", element: <SigninPage /> },
        { path: "register", element: <SignupPage /> },
        { path: "success", element: <SuccessPayPage /> },
        {
          path: "checkout",
          element: (
            <ProtectedRoute>
              <CheckoutPage />
            </ProtectedRoute>
          ),
        },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
