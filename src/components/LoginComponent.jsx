import { useState } from "react";
import {
  Paper,
  TextField,
  Button,
  Box,
  Stack,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const LoginComponent = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    navigate("/");
  };

  return (
    <div className="auth-page">
      <div className="auth-bg-gradient"></div>

      <main className="auth-container">
        <Paper className="auth-card" elevation={8}>
          <div className="auth-header">
            <Typography className="auth-label" sx={{ fontSize: 12 }}>
              Members' Lounge
            </Typography>
            <Typography
              variant="h6"
              component="h2"
              className="heading-hero"
              sx={{ fontSize: { xs: 25, sm: 30 }, fontWeight: "bold" }}
            >
              Welcome Back
            </Typography>

            <Box
              className="divider-emerald"
              sx={{
                width: { xs: "100%", sm: 400 },
                maxWidth: "100%",
                margin: "0 auto",
              }}
            ></Box>
          </div>

          <Box component="form" onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <TextField
                label="Email"
                name="email"
                onChange={handleChange}
                value={form.email}
                fullWidth
                className="mui-input"
              />

              <TextField
                label="Password"
                type="password"
                name="password"
                onChange={handleChange}
                value={form.password}
                fullWidth
                className="mui-input"
              />

              <Button
                type="submit"
                className="btn-primary"
                fullWidth
                sx={{ color: "black", fontWeight: 500 }}
              >
                <Typography sx={{fontSize:{xs:10,sm:15}}}>Enter the Lounge</Typography>
              </Button>
            </Stack>
          </Box>
          <Link to="/register" style={{textDecoration: "none"}}>
            <Typography
              className="auth-footer"
              sx={{
                display: "block",
                mt: 3,
                fontSize: 15,
              }}
            >
              New to the salon?
              <span className="auth-footer-span-text">
                {" "}
                Request an invitation
              </span>
            </Typography>
          </Link>
        </Paper>
      </main>
    </div>
  );
};

export default LoginComponent;
