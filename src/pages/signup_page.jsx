import { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Stack,
  Divider,
  IconButton,
} from "@mui/material";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import { registerUser } from "../api/signup_api";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    setError("");

    if (!email || !password) {
      setError("Please enter both your email and password to continue.");
      return;
    }

    try {
      setLoading(true);
      await registerUser(email, password);
      navigate("/login");
    } catch (err) {
      setError(err.message || "We couldn't create your account right now. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ minHeight: "85vh", display: "flex", alignItems: "center", px: 2, py: 6 }}>
      <Box
        sx={{
          width: "100%",
          maxWidth: 1180,
          mx: "auto",
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1.05fr 0.95fr" },
          borderRadius: 5,
          overflow: "hidden",
          boxShadow: "0 18px 50px rgba(48,59,77,0.12)",
          border: "1px solid rgba(48,59,77,0.08)",
        }}
      >
        {/* LEFT PANEL */}
        <Box
          sx={{
            bgcolor: "var(--color-title)",
            color: "var(--color-white)",
            p: { xs: 4, md: 6 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography sx={{ color: "var(--color-primary)", fontWeight: 900, letterSpacing: 2 }}>
            FURNETA
          </Typography>

          <Typography variant="h3" sx={{ mt: 2, fontWeight: 900, lineHeight: 1.05 }}>
            Create your account.
          </Typography>

          <Typography sx={{ mt: 2, opacity: 0.8, lineHeight: 1.8 }}>
            Register to save favorites, track orders, and complete checkout faster.
          </Typography>

          <Stack direction="row" spacing={1.2} sx={{ mt: 4, flexWrap: "wrap" }}>
            <Box sx={{ px: 2, py: 1, borderRadius: 999, bgcolor: "rgba(255,255,255,0.08)" }}>
              Secure profile
            </Box>
            <Box sx={{ px: 2, py: 1, borderRadius: 999, bgcolor: "rgba(255,255,255,0.08)" }}>
              Wishlist sync
            </Box>
            <Box sx={{ px: 2, py: 1, borderRadius: 999, bgcolor: "rgba(255,255,255,0.08)" }}>
              Faster checkout
            </Box>
          </Stack>
        </Box>

        {/* RIGHT PANEL */}
        <Box sx={{ bgcolor: "var(--color-white)", p: { xs: 3, md: 6 } }}>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, md: 4 },
              borderRadius: 4,
              border: "1px solid rgba(48,59,77,0.08)",
              boxShadow: "0 12px 30px rgba(48,59,77,0.06)",
            }}
          >
            <Stack direction="row" spacing={1.4} alignItems="center" sx={{ mb: 3 }}>
              <IconButton
                sx={{
                  bgcolor: "rgba(252,131,14,0.12)",
                  color: "var(--color-primary)",
                }}
              >
                <PersonAddAltOutlinedIcon />
              </IconButton>

              <Box>
                <Typography variant="h5" sx={{ fontWeight: 900, color: "var(--color-title)" }}>
                  Sign Up
                </Typography>
                <Typography sx={{ color: "var(--color-text)", fontSize: 14 }}>
                  Create your account in a few steps.
                </Typography>
              </Box>
            </Stack>

            <Stack spacing={2.1}>
              <TextField
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
              />

              <TextField
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
              />

              {error && (
                <Typography sx={{ color: "#c62828", fontSize: 14 }}>
                  {error}
                </Typography>
              )}

              <Button
                variant="contained"
                onClick={handleSignup}
                disabled={loading}
                sx={{
                  py: 1.4,
                  borderRadius: 999,
                  bgcolor: "var(--color-primary)",
                  fontWeight: 800,
                  "&:hover": { bgcolor: "var(--color-primary-hover)" },
                }}
              >
                {loading ? "Creating account..." : "Create Account"}
              </Button>

              <Divider sx={{ my: 0.5 }} />

              <Typography sx={{ textAlign: "center", mt: 1, color: "var(--color-text)" }}>
                Already have an account?{" "}
                <Box
                  component="span"
                  onClick={() => navigate("/login")}
                  sx={{
                    color: "var(--color-primary)",
                    fontWeight: 800,
                    cursor: "pointer",
                  }}
                >
                  Sign in
                </Box>
              </Typography>
            </Stack>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default SignupPage;
