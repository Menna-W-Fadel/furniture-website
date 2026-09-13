import {
  Box,
  Container,
  Typography,
  Paper,
  Stack,
} from "@mui/material";

const AboutPage = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="xl">

        {/* HERO */}
        <Box
          sx={{
            textAlign: "center",
            maxWidth: 700,
            mx: "auto",
          }}
        >
          <Typography
            variant="h3"
            fontWeight={900}
            color="var(--color-title)"
          >
            Designed for modern living
          </Typography>

          <Typography
            sx={{ mt: 2, color: "var(--color-text)", lineHeight: 1.8 }}
          >
            Furneta is built around simplicity, functionality, and elegant
            design. We help you create spaces that feel intentional and
            comfortable.
          </Typography>
        </Box>

        {/* GRID FEATURES */}
        <Box
          sx={{
            mt: 4,
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: { xs: 2, sm: 3 },
          }}
        >
          {[
            {
              title: "Quality Materials",
              text: "We select durable materials designed to last.",
            },
            {
              title: "Modern Design",
              text: "Clean, minimal, and timeless furniture pieces.",
            },
            {
              title: "Customer Focus",
              text: "Smooth experience from browsing to delivery.",
            },
          ].map((item) => (
            <Paper
              key={item.title}
              sx={{
                p: { xs: 3, md: 4 },
                borderRadius: 4,
                height: "100%",
                textAlign: { xs: "center", md: "left" },
                border: "1px solid rgba(48,59,77,0.08)",
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0 15px 30px rgba(48,59,77,0.1)",
                },
              }}
            >
              <Typography fontWeight={800} fontSize={18}>
                {item.title}
              </Typography>
              <Typography sx={{ mt: 1.5, color: "var(--color-text)" }}>
                {item.text}
              </Typography>
            </Paper>
          ))}
        </Box>

        {/* SPLIT SECTION */}
        <Box
          sx={{
            mt: 6,
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 4,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography variant="h5" fontWeight={900}>
              Our Mission
            </Typography>
            <Typography sx={{ mt: 2, color: "var(--color-text)" }}>
              To make furniture shopping simple, inspiring, and reliable.
              We aim to help people build spaces that reflect their lifestyle.
            </Typography>
          </Box>

          <Paper
            sx={{
              p: 4,
              borderRadius: 4,
              bgcolor: "var(--color-title)",
              color: "white",
            }}
          >
            <Typography variant="h6" fontWeight={900}>
              What we believe
            </Typography>

            <Stack spacing={1.5} sx={{ mt: 2 }}>
              <Typography>• Simplicity wins</Typography>
              <Typography>• Design matters</Typography>
              <Typography>• Quality is non-negotiable</Typography>
            </Stack>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutPage;