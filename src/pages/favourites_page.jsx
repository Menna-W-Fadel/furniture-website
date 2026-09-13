import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  Box,
  Button,
  Paper
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useFavorites } from "../context/favouritesContext";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "../context/snackbarContext";

const FavouritesPage = () => {
  const { favorites, toggleFavorite } = useFavorites();
  const navigate = useNavigate();
  const { showMessage } = useSnackbar();

  if (favorites.length === 0) {
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
        <FavoriteBorderIcon
          sx={{
            fontSize: 64,
            color: "var(--color-primary)",
          }}
        />

        <Typography
          variant="h4"
          sx={{
            mt: 2,
            color: "var(--color-title)",
            fontWeight: 800,
          }}
        >
          Your favorites are empty
        </Typography>

        <Typography
          sx={{
            mt: 1.5,
            color: "var(--color-text)",
          }}
        >
          Save products you love and find them here anytime.
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
            "&:hover": {
              bgcolor: "var(--color-primary-hover)",
            },
          }}
        >
          Browse Products
        </Button>
      </Paper>
    </Container>
  );
}

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>

      {/* HEADER */}
      <Box sx={{ mb: 5 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 800,
            color: "var(--color-title)",
          }}
        >
          Your Favorites
        </Typography>

        <Typography sx={{ color: "var(--color-text)", mt: 1 }}>
          Items you saved for later
        </Typography>
      </Box>

      {/* GRID */}
      <Grid container spacing={3}>
        {favorites.map((item) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.id}>

            <Card
              sx={{
                borderRadius: 4,
                overflow: "hidden",
                transition: "0.3s",
                border: "1px solid rgba(48,59,77,0.08)",

                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
                },
              }}
            >
              {/* IMAGE */}
              <Box sx={{ position: "relative" }}>
                <CardMedia
                  component="img"
                  height="230"
                  image={item.image}
                />

                {/* REMOVE BUTTON (FLOATING) */}
                <IconButton
                  onClick={() => {
                    toggleFavorite(item);
                    showMessage(`${item.name} removed from favorites`);
                  }}
                  sx={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                    bgcolor: "#fff",
                    boxShadow: 2,

                    "&:hover": {
                      bgcolor: "#fc830e",
                      color: "#fff",
                    },
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </Box>

              {/* CONTENT */}
              <CardContent sx={{ p: 3 }}>
                <Typography
                  sx={{
                    fontWeight: 600,
                    color: "var(--color-title)",
                    mb: 1,
                  }}
                >
                  {item.name}
                </Typography>

                {/* PRICE */}
                <Box sx={{ mb: 2 }}>
                  {item.sale && (
                    <Typography
                      component="span"
                      sx={{
                        textDecoration: "line-through",
                        color: "#999",
                        mr: 1,
                      }}
                    >
                      ${item.price}
                    </Typography>
                  )}

                  <Typography
                    component="span"
                    sx={{
                      color: "var(--color-primary)",
                      fontWeight: 700,
                      fontSize: 18,
                    }}
                  >
                    ${item.finalPrice}
                  </Typography>
                </Box>

                {/* ACTION */}
                <Button
                  fullWidth
                  onClick={() => navigate(`/shop/${item.slug}`)}
                  sx={{
                    borderRadius: 999,
                    py: 1.2,
                    bgcolor: "var(--color-primary)",
                    color: "#fff",

                    "&:hover": {
                      bgcolor: "var(--color-primary-hover)",
                    },
                  }}
                >
                  View Product
                </Button>
              </CardContent>
            </Card>

          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default FavouritesPage;
