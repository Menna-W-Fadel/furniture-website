import React from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  Stack,
  Divider,
  Button,
  IconButton,
  Chip,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/cartContext";

const CartPage = () => {
  const {
    cartItems,
    removeFromCart,
    increaseQty,
    decreaseQty,
  } = useCart();

  const navigate = useNavigate();

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.finalPrice * item.quantity,
    0
  );

  const shipping = subtotal >= 500 || subtotal === 0 ? 0 : 25;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Paper
          elevation={0}
          sx={{
            p: 6,
            borderRadius: 4,
            textAlign: "center",
            border: "1px solid rgba(48,59,77,0.08)",
            boxShadow: "0 10px 30px rgba(48,59,77,0.06)",
          }}
        >
          <ShoppingBagOutlinedIcon
            sx={{ fontSize: 64, color: "var(--color-primary)" }}
          />

          <Typography
            variant="h4"
            sx={{ mt: 2, color: "var(--color-title)", fontWeight: 800 }}
          >
            Your cart is empty
          </Typography>

          <Typography sx={{ mt: 1.5, color: "var(--color-text)" }}>
            Browse the shop and add products you like.
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
            Continue Shopping
          </Button>
        </Paper>
      </Container>
    );
  }

  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="xl">
        <Typography
          variant="h4"
          sx={{ color: "var(--color-title)", fontWeight: 800, mb: 4 }}
        >
          Shopping Cart
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "1.6fr 0.8fr" },
            gap: 4,
            alignItems: "start",
          }}
        >
          {/* ITEMS */}
          <Stack spacing={2}>
            {cartItems.map((item) => (
              <Paper
                key={item.id}
                elevation={0}
                sx={{
                  p: 2,
                  borderRadius: 4,
                  border: "1px solid rgba(48,59,77,0.08)",
                  boxShadow: "0 10px 28px rgba(48,59,77,0.06)",
                }}
              >
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", sm: "110px 1fr auto" },
                    gap: 2,
                    alignItems: "center",
                  }}
                >
                  <Box
                    component="img"
                    src={item.image}
                    alt={item.name}
                    sx={{
                      width: { xs: "100%", sm: 110 },
                      height: { xs: 220, sm: 110 },
                      objectFit: "cover",
                      borderRadius: 3,
                    }}
                  />

                  <Box>
                    <Typography
                      sx={{
                        fontWeight: 800,
                        color: "var(--color-title)",
                        fontSize: 18,
                      }}
                    >
                      {item.name}
                    </Typography>

                    <Typography sx={{ color: "var(--color-text)", mt: 0.7 }}>
                      {item.category}
                    </Typography>

                    <Stack
                      direction="row"
                      alignItems="center"
                      spacing={1.2}
                      sx={{ mt: 1.5, flexWrap: "wrap" }}
                    >
                      <Chip
                        label={`$${item.finalPrice.toFixed(2)}`}
                        sx={{
                          bgcolor: "rgba(252,131,14,0.12)",
                          color: "var(--color-primary)",
                          fontWeight: 800,
                        }}
                      />

                      {item.sale && (
                        <Chip
                          label={`-${item.discount}%`}
                          sx={{
                            bgcolor: "rgba(48,59,77,0.08)",
                            color: "var(--color-title)",
                            fontWeight: 700,
                          }}
                        />
                      )}
                    </Stack>
                  </Box>

                  <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                    <IconButton
                      onClick={() => removeFromCart(item.id)}
                      sx={{
                        border: "1px solid rgba(48,59,77,0.12)",
                        mb: 1.5,
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>

                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        border: "1px solid rgba(48,59,77,0.12)",
                        borderRadius: 999,
                        overflow: "hidden",
                      }}
                    >
                      <IconButton
                        onClick={() => decreaseQty(item.id)}
                        sx={{ borderRadius: 0, px: 2 }}
                      >
                        <RemoveIcon fontSize="small" />
                      </IconButton>

                      <Typography
                        sx={{ minWidth: 36, textAlign: "center", fontWeight: 700 }}
                      >
                        {item.quantity}
                      </Typography>

                      <IconButton
                        onClick={() => increaseQty(item.id)}
                        sx={{ borderRadius: 0, px: 2 }}
                      >
                        <AddIcon fontSize="small" />
                      </IconButton>
                    </Box>
                  </Box>
                </Box>
              </Paper>
            ))}
          </Stack>

          {/* SUMMARY */}
          <Paper
            elevation={0}
            sx={{
              p: 3,
              borderRadius: 4,
              position: "sticky",
              top: 24,
              border: "1px solid rgba(48,59,77,0.08)",
              boxShadow: "0 10px 28px rgba(48,59,77,0.06)",
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: 800, color: "var(--color-title)" }}
            >
              Order Summary
            </Typography>

            <Divider sx={{ my: 2.5 }} />

            <Stack spacing={1.5}>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography color="var(--color-text)">Subtotal</Typography>
                <Typography fontWeight={700}>${subtotal.toFixed(2)}</Typography>
              </Box>

              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography color="var(--color-text)">Shipping</Typography>
                <Typography fontWeight={700}>
                  {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                </Typography>
              </Box>

              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography color="var(--color-text)">Total</Typography>
                <Typography fontWeight={900} fontSize={20} color="var(--color-title)">
                  ${total.toFixed(2)}
                </Typography>
              </Box>
            </Stack>

            <Button
              fullWidth
              variant="contained"
              onClick={() => navigate("/checkout")}
              sx={{
                mt: 3,
                py: 1.4,
                borderRadius: 999,
                bgcolor: "var(--color-primary)",
                fontWeight: 800,
                "&:hover": { bgcolor: "var(--color-primary-hover)" },
              }}
            >
              Proceed to Checkout
            </Button>

            <Button
              fullWidth
              onClick={() => navigate("/shop")}
              sx={{
                mt: 1.5,
                py: 1.4,
                borderRadius: 999,
                color: "var(--color-title)",
                border: "1px solid rgba(48,59,77,0.15)",
              }}
            >
              Continue Shopping
            </Button>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default CartPage;