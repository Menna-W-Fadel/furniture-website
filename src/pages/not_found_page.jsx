import { Box, Container, Typography, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchOffOutlinedIcon from "@mui/icons-material/SearchOffOutlined";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        px: 2,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated background circles */}
      <Box
        className="not-found-circle not-found-circle-1"
        sx={{
          position: "absolute",
          width: 400,
          height: 400,
          borderRadius: "50%",
          bgcolor: "rgba(252,131,14,0.04)",
          top: -100,
          right: -80,
        }}
      />
      <Box
        className="not-found-circle not-found-circle-2"
        sx={{
          position: "absolute",
          width: 300,
          height: 300,
          borderRadius: "50%",
          bgcolor: "rgba(187,206,213,0.2)",
          bottom: -60,
          left: -50,
        }}
      />
      <Box
        className="not-found-circle not-found-circle-3"
        sx={{
          position: "absolute",
          width: 200,
          height: 200,
          borderRadius: "50%",
          border: "1px solid rgba(252,131,14,0.08)",
          top: "40%",
          left: "15%",
        }}
      />

      <Container maxWidth="sm" sx={{ position: "relative", zIndex: 1 }}>
        {/* Icon */}
        <Box
          className="not-found-icon"
          sx={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 90,
            height: 90,
            borderRadius: "50%",
            bgcolor: "rgba(252,131,14,0.1)",
            mb: 3,
          }}
        >
          <SearchOffOutlinedIcon
            sx={{ fontSize: 44, color: "var(--color-primary)" }}
          />
        </Box>

        {/* 404 number */}
        <Typography
          className="not-found-title"
          variant="h1"
          sx={{
            fontWeight: 900,
            fontSize: { xs: 90, md: 130 },
            lineHeight: 1,
            background: "linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-hover) 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: -4,
          }}
        >
          404
        </Typography>

        {/* Title */}
        <Typography
          className="not-found-subtitle"
          variant="h4"
          sx={{
            fontWeight: 800,
            color: "var(--color-title)",
            mt: 1,
          }}
        >
          Page Not Found
        </Typography>

        {/* Description */}
        <Typography
          className="not-found-desc"
          sx={{
            mt: 2,
            color: "var(--color-text)",
            fontSize: 17,
            lineHeight: 1.7,
            maxWidth: 400,
            mx: "auto",
          }}
        >
          The page you're looking for doesn't exist, was moved, or is temporarily
          unavailable.
        </Typography>

        {/* Buttons */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="center"
          className="not-found-buttons"
          sx={{ mt: 5 }}
        >
          <Button
            onClick={() => navigate("/")}
            variant="contained"
            startIcon={<HomeOutlinedIcon />}
            sx={{
              px: 4,
              py: 1.3,
              borderRadius: 999,
              bgcolor: "var(--color-primary)",
              fontWeight: 800,
              textTransform: "none",
              fontSize: 15,
              "&:hover": { bgcolor: "var(--color-primary-hover)" },
            }}
          >
            Back to Home
          </Button>
          <Button
            onClick={() => navigate("/shop")}
            variant="outlined"
            sx={{
              px: 4,
              py: 1.3,
              borderRadius: 999,
              fontWeight: 800,
              textTransform: "none",
              fontSize: 15,
              color: "var(--color-title)",
              borderColor: "rgba(48,59,77,0.2)",
              "&:hover": {
                borderColor: "var(--color-primary)",
                color: "var(--color-primary)",
              },
            }}
          >
            Browse Shop
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default NotFound;
