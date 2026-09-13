import { useEffect } from "react";
import { Box, Typography, Button, Paper } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { keyframes } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/cartContext";

const pulse = keyframes`
  0% { transform: scale(0.92); opacity: 0.72; }
  50% { transform: scale(1.06); opacity: 1; }
  100% { transform: scale(0.92); opacity: 0.72; }
`;

const SuccessPayPage = () => {
  const navigate = useNavigate();
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box
      sx={{
        minHeight: "75vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
      }}
    >
      <Paper
        elevation={0}
        sx={{
          width: "100%",
          maxWidth: 620,
          p: { xs: 4, md: 6 },
          textAlign: "center",
          borderRadius: 5,
          border: "1px solid rgba(48,59,77,0.08)",
          boxShadow: "0 16px 40px rgba(48,59,77,0.08)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            width: 96,
            height: 96,
            borderRadius: "50%",
            mx: "auto",
            display: "grid",
            placeItems: "center",
            border: "4px solid var(--color-primary)",
            animation: `${pulse} 1.6s ease-in-out infinite`,
          }}
        >
          <CheckCircleIcon sx={{ fontSize: 58, color: "var(--color-primary)" }} />
        </Box>

        <Typography
          variant="h4"
          sx={{ mt: 3, fontWeight: 900, color: "var(--color-title)" }}
        >
          Payment Successful
        </Typography>

        <Typography sx={{ mt: 1.5, color: "var(--color-text)" }}>
          Thank you for your purchase. Your order has been placed successfully.
        </Typography>

        <Box
          sx={{
            mt: 4,
            width: 120,
            height: 4,
            borderRadius: 999,
            mx: "auto",
            bgcolor: "rgba(252,131,14,0.25)",
            overflow: "hidden",
            position: "relative",
            "&::after": {
              content: '""',
              position: "absolute",
              inset: 0,
              width: "45%",
              bgcolor: "var(--color-primary)",
              animation: "slideBar 1.8s ease-in-out infinite",
            },
            "@keyframes slideBar": {
              "0%": { transform: "translateX(-20%)" },
              "50%": { transform: "translateX(140%)" },
              "100%": { transform: "translateX(-20%)" },
            },
          }}
        />

        <Button
          onClick={() => navigate("/")}
          variant="contained"
          sx={{
            mt: 4,
            px: 4,
            py: 1.4,
            borderRadius: 999,
            bgcolor: "var(--color-primary)",
            fontWeight: 800,
            "&:hover": { bgcolor: "var(--color-primary-hover)" },
          }}
        >
          Continue Shopping
        </Button>
      </Paper>
    </Box>
  );
};

export default SuccessPayPage;
