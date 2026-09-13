import { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Divider,
  Stack,
  IconButton,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { loginUser } from "../api/login_api";
import { signInWithGoogle } from "../api/google_api";
import { useNavigate } from "react-router-dom";

const SigninPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setError("");

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      setLoading(true);
      await loginUser(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message || "Login failed.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError("");

    try {
      setLoading(true);
      await signInWithGoogle();
      navigate("/");
    } catch (err) {
      setError(err.message || "Google sign-in failed.");
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
          gridTemplateColumns: { xs: "1fr", md: "0.95fr 1.05fr" },
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
            Welcome back.
          </Typography>

          <Typography sx={{ mt: 2, opacity: 0.8, lineHeight: 1.8 }}>
            Sign in to manage your cart, continue checkout, save your favorites, and track your orders.
          </Typography>

          <Stack direction="row" spacing={1.2} sx={{ mt: 4, flexWrap: "wrap" }}>
            <Box sx={{ px: 2, py: 1, borderRadius: 999, bgcolor: "rgba(255,255,255,0.08)" }}>
              Fast checkout
            </Box>
            <Box sx={{ px: 2, py: 1, borderRadius: 999, bgcolor: "rgba(255,255,255,0.08)" }}>
              Saved favorites
            </Box>
            <Box sx={{ px: 2, py: 1, borderRadius: 999, bgcolor: "rgba(255,255,255,0.08)" }}>
              Order history
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
                <LockOutlinedIcon />
              </IconButton>

              <Box>
                <Typography variant="h5" sx={{ fontWeight: 900, color: "var(--color-title)" }}>
                  Sign In
                </Typography>
                <Typography sx={{ color: "var(--color-text)", fontSize: 14 }}>
                  Enter your details to continue.
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
                onClick={handleLogin}
                disabled={loading}
                sx={{
                  py: 1.4,
                  borderRadius: 999,
                  bgcolor: "var(--color-primary)",
                  fontWeight: 800,
                  "&:hover": { bgcolor: "var(--color-primary-hover)" },
                }}
              >
                {loading ? "Signing in..." : "Sign In"}
              </Button>

              <Divider sx={{ my: 0.5 }}>or</Divider>

              <Button
                onClick={handleGoogleLogin}
                disabled={loading}
                startIcon={<GoogleIcon />}
                sx={{
                  py: 1.4,
                  borderRadius: 999,
                  color: "var(--color-title)",
                  border: "1px solid rgba(48,59,77,0.16)",
                }}
              >
                Continue with Google
              </Button>

              <Typography sx={{ textAlign: "center", mt: 1, color: "var(--color-text)" }}>
                Don’t have an account?{" "}
                <Box
                  component="span"
                  onClick={() => navigate("/register")}
                  sx={{
                    color: "var(--color-primary)",
                    fontWeight: 800,
                    cursor: "pointer",
                  }}
                >
                  Sign up
                </Box>
              </Typography>
            </Stack>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default SigninPage;