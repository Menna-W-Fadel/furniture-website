import { Box, Container, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        px: 2,
      }}
    >
      <Container maxWidth="sm">
        <Typography
          variant="h1"
          sx={{ fontWeight: 900, color: "var(--color-primary)", fontSize: 120 }}
        >
          404
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: 800, color: "var(--color-title)" }}>
          Page Not Found
        </Typography>
        <Typography sx={{ mt: 2, color: "var(--color-text)" }}>
          The page you're looking for doesn't exist or has been moved.
        </Typography>
        <Button
          onClick={() => navigate("/")}
          variant="contained"
          sx={{
            mt: 4,
            px: 4,
            py: 1.3,
            borderRadius: 999,
            bgcolor: "var(--color-primary)",
            fontWeight: 800,
            "&:hover": { bgcolor: "var(--color-primary-hover)" },
          }}
        >
          Back to Home
        </Button>
      </Container>
    </Box>
  );
};

export default NotFound;
