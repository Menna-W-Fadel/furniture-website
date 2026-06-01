import React from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  TextField,
  Button,
  Grid,
  Stack,
} from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

const ContactPage = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="xl">
        {/* HERO */}
        <Paper
          elevation={0}
          sx={{
            p: { xs: 4, md: 7 },
            borderRadius: 5,
            bgcolor: "var(--color-title)",
            color: "white",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at top right, rgba(252,131,14,0.2), transparent 35%)",
            }}
          />

          <Box sx={{ position: "relative" }}>
            <Typography variant="h3" fontWeight={900}>
              Let’s talk
            </Typography>
            <Typography sx={{ mt: 2, opacity: 0.85, maxWidth: 600 }}>
              Have a question, issue, or idea? We’re here to help you find the
              perfect furniture experience.
            </Typography>
          </Box>
        </Paper>

        {/* CONTENT */}
        <Grid container spacing={4} sx={{ mt: 3 }}>
          {/* LEFT INFO */}
          <Grid item xs={12} md={4}>
            <Stack spacing={2.5}>
              {[
                {
                  icon: <EmailOutlinedIcon />,
                  title: "Email",
                  text: "support@furneta.com",
                },
                {
                  icon: <CallOutlinedIcon />,
                  title: "Phone",
                  text: "+20 100 000 0000",
                },
                {
                  icon: <LocationOnOutlinedIcon />,
                  title: "Location",
                  text: "Cairo, Egypt",
                },
              ].map((item) => (
                <Paper
                  key={item.title}
                  elevation={0}
                  sx={{
                    p: 3,
                    borderRadius: 4,
                    display: "flex",
                    gap: 2,
                    alignItems: "center",
                    border: "1px solid rgba(48,59,77,0.08)",
                    transition: "0.3s",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 10px 25px rgba(48,59,77,0.1)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 50,
                      height: 50,
                      borderRadius: 3,
                      display: "grid",
                      placeItems: "center",
                      bgcolor: "rgba(252,131,14,0.12)",
                      color: "var(--color-primary)",
                    }}
                  >
                    {item.icon}
                  </Box>

                  <Box>
                    <Typography fontWeight={800}>
                      {item.title}
                    </Typography>
                    <Typography color="var(--color-text)">
                      {item.text}
                    </Typography>
                  </Box>
                </Paper>
              ))}
            </Stack>
          </Grid>

          {/* FORM */}
          <Grid item xs={12} md={8}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                borderRadius: 4,
                border: "1px solid rgba(48,59,77,0.08)",
                boxShadow: "0 12px 28px rgba(48,59,77,0.06)",
              }}
            >
              <Typography variant="h5" fontWeight={900}>
                Send a message
              </Typography>

              <Grid container spacing={2} sx={{ mt: 1 }}>
                {["Name", "Email"].map((label) => (
                  <Grid item xs={12} md={6} key={label}>
                    <TextField
                      fullWidth
                      label={label}
                      variant="outlined"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 3,
                        },
                      }}
                    />
                  </Grid>
                ))}

                <Grid item xs={12}>
                  <TextField fullWidth label="Subject" />
                </Grid>

                <Grid item xs={12}>
                  <TextField fullWidth multiline rows={6} label="Message" />
                </Grid>

                <Grid item xs={12}>
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{
                      py: 1.5,
                      borderRadius: 999,
                      bgcolor: "var(--color-primary)",
                      fontWeight: 800,
                      "&:hover": {
                        bgcolor: "var(--color-primary-hover)",
                      },
                    }}
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactPage;