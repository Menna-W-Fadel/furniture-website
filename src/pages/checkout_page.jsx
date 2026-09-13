import { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import {
  Container,
  Typography,
  Paper,
  Button,
  Stack,
  CircularProgress,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import CheckoutForm from "../components/CheckoutForm";
import { stripePromise } from "../stripe";
import { useCart } from "../context/cartContext";

//4242 4242 4242 4242
const CheckoutPage = () => {
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { cartItems } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    if (cartItems.length === 0) {
      setLoading(false);
      return;
    }

    let cancelled = false;

    fetch("/api/create-payment-intent", {
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
      .then(async (res) => {
        const data = await res.json().catch(() => ({}));
        if (!res.ok || !data.clientSecret) {
          throw new Error(
            data.error || "We're having trouble connecting to our payment service. Please try again."
          );
        }
        return data;
      })
      .then((data) => {
        if (!cancelled) setClientSecret(data.clientSecret);
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err.message || "We couldn't reach our payment service. Please check your connection and try again.");
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartItems.length]);

  /* ---------- EMPTY CART ---------- */
  if (!loading && cartItems.length === 0) {
    return (
      <Container maxWidth="sm" sx={{ py: 8 }}>
        <Paper
          elevation={0}
          sx={{
            p: 6,
            borderRadius: 4,
            textAlign: "center",
            border: "1px solid rgba(48,59,77,0.08)",
          }}
        >
          <Typography variant="h5" fontWeight={800} color="var(--color-title)">
            Your cart is empty
          </Typography>
          <Typography sx={{ mt: 1.5, color: "var(--color-text)" }}>
            Add products before proceeding to checkout.
          </Typography>
          <Button
            onClick={() => navigate("/shop")}
            variant="contained"
            sx={{
              mt: 4,
              px: 4,
              py: 1.3,
              borderRadius: 999,
              bgcolor: "var(--color-primary)",
              "&:hover": { bgcolor: "var(--color-primary-hover)" },
            }}
          >
            Go to Shop
          </Button>
        </Paper>
      </Container>
    );
  }

  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 800,
          color: "var(--color-title)",
          mb: 4,
          textAlign: "center",
        }}
      >
        Checkout
      </Typography>

      {/* LOADING */}
      {loading && (
        <Stack alignItems="center" sx={{ py: 10 }}>
          <CircularProgress sx={{ color: "var(--color-primary)" }} />
          <Typography sx={{ mt: 3, color: "var(--color-text)" }}>
            Preparing secure payment…
          </Typography>
        </Stack>
      )}

      {/* ERROR */}
      {!loading && error && (
        <Paper
          elevation={0}
          sx={{
            p: 4,
            borderRadius: 4,
            textAlign: "center",
            border: "1px solid rgba(198,40,40,0.25)",
            bgcolor: "rgba(198,40,40,0.04)",
          }}
        >
          <Typography fontWeight={800} color="#c62828">
            Payment could not start
          </Typography>
          <Typography sx={{ mt: 1.5, color: "var(--color-text)" }}>
            {error}
          </Typography>
          <Typography
            sx={{ mt: 1, fontSize: 13, color: "var(--color-text)", opacity: 0.7 }}
          >
            If this issue persists, please contact our support team for assistance.
          </Typography>
          <Button
            onClick={() => navigate("/cart")}
            variant="contained"
            sx={{
              mt: 3,
              px: 4,
              py: 1.3,
              borderRadius: 999,
              bgcolor: "var(--color-title)",
              "&:hover": { bgcolor: "var(--color-primary-hover)" },
            }}
          >
            Back to Cart
          </Button>
        </Paper>
      )}

      {/* PAYMENT FORM */}
      {!loading && !error && clientSecret && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
    </Container>
  );
};

export default CheckoutPage;
