import {
  Box,
  Container,
  Grid,
  Typography,
  Stack,
  Link,
  IconButton,
  TextField,
  Button,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const FooterComponent = () => {
  return (
    <Box
      component="footer"
      sx={{
        mt: 10,
        bgcolor: "var(--color-title)",
        color: "var(--color-white)",
        pt: 7,
        pb: 3,
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 900, color: "var(--color-primary)" }}>
              Furneta
            </Typography>
            <Typography sx={{ mt: 2, opacity: 0.8, lineHeight: 1.8, maxWidth: 360 }}>
              Modern furniture and curated home pieces for a warm, elegant, and practical living space.
            </Typography>

            <Stack direction="row" spacing={1} sx={{ mt: 2.5 }}>
              {[FacebookIcon, InstagramIcon, LinkedInIcon].map((Icon, index) => (
                <IconButton
                  key={index}
                  sx={{
                    color: "var(--color-white)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    "&:hover": {
                      bgcolor: "var(--color-primary)",
                      color: "var(--color-white)",
                    },
                  }}
                >
                  <Icon />
                </IconButton>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 6, md: 2 }}>
            <Typography sx={{ fontWeight: 800, mb: 2 }}>Pages</Typography>
            <Stack spacing={1}>
              <Link href="/" underline="none" color="inherit">Home</Link>
              <Link href="/shop" underline="none" color="inherit">Shop</Link>
              <Link href="/about" underline="none" color="inherit">About</Link>
              <Link href="/contact" underline="none" color="inherit">Contact</Link>
            </Stack>
          </Grid>

          <Grid size={{ xs: 6, md: 3 }}>
            <Typography sx={{ fontWeight: 800, mb: 2 }}>Support</Typography>
            <Stack spacing={1}>
              <Typography sx={{ opacity: 0.85 }}>Shipping</Typography>
              <Typography sx={{ opacity: 0.85 }}>Returns</Typography>
              <Typography sx={{ opacity: 0.85 }}>Privacy</Typography>
              <Typography sx={{ opacity: 0.85 }}>FAQ</Typography>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <Typography sx={{ fontWeight: 800, mb: 2 }}>Newsletter</Typography>
            <Typography sx={{ opacity: 0.8, lineHeight: 1.7, mb: 2 }}>
              Subscribe for updates, offers, and product drops.
            </Typography>

            <Box sx={{ display: "flex", gap: 1 }}>
              <TextField
                placeholder="Email address"
                size="small"
                fullWidth
                sx={{
                  bgcolor: "rgba(255,255,255,0.06)",
                  borderRadius: 2,
                  "& .MuiOutlinedInput-root": {
                    color: "var(--color-white)",
                    "& fieldset": { borderColor: "rgba(255,255,255,0.12)" },
                    "&:hover fieldset": { borderColor: "rgba(255,255,255,0.3)" },
                  },
                }}
              />
              <Button
                variant="contained"
                sx={{
                  bgcolor: "var(--color-primary)",
                  minWidth: 48,
                  px: 2,
                  "&:hover": { bgcolor: "var(--color-primary-hover)" },
                }}
              >
                <ArrowForwardIcon />
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            mt: 5,
            pt: 3,
            borderTop: "1px solid rgba(255,255,255,0.12)",
            textAlign: "center",
            opacity: 0.7,
          }}
        >
          <Typography sx={{ fontSize: 14 }}>
            © 2026 Furneta. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default FooterComponent;