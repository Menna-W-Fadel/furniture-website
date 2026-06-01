import React, { useMemo, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
  Chip,
  Divider,
  Button,
  IconButton,
  Rating,
  Paper,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import { useParams, useNavigate } from "react-router-dom";
import { useProducts } from "../context/productsContext";
import { useCart } from "../context/cartContext";
import { useFavorites } from "../context/favouritesContext";

const ProductDetailsPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { products } = useProducts();
  const { addToCart } = useCart();
  const { favorites, toggleFavorite } = useFavorites();

  const product = useMemo(
    () => products.find((p) => p.slug === slug),
    [products, slug],
  );

  const [qty, setQty] = useState(1);
  const [activeImage, setActiveImage] = useState(product?.image);

  if (!product) {
    return (
      <Container sx={{ py: 10 }}>
        <Typography variant="h5" color="var(--color-title)">
          Product not found
        </Typography>
      </Container>
    );
  }

  const gallery = product.gallery?.length ? product.gallery : [product.image];
  const isFav = favorites.some((item) => item.id === product.id);
  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity: qty,
    });
  };

  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.1fr 0.9fr" },
            gap: { xs: 3, md: 6 },
            alignItems: "start",
          }}
        >
          {/* LEFT: GALLERY */}
          <Box>
            <Paper
              elevation={0}
              sx={{
                borderRadius: 4,
                overflow: "hidden",
                border: "1px solid rgba(48,59,77,0.08)",
                boxShadow: "0 12px 30px rgba(48,59,77,0.08)",
              }}
            >
              <Box
                component="img"
                src={activeImage}
                alt={product.name}
                sx={{
                  width: "100%",
                  height: { xs: 360, md: 540 },
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </Paper>

            <Stack
              direction="row"
              spacing={1.5}
              sx={{ mt: 2, flexWrap: "wrap" }}
            >
              {gallery.map((img, index) => (
                <Box
                  key={index}
                  component="img"
                  src={img}
                  alt={`${product.name}-${index}`}
                  onClick={() => setActiveImage(img)}
                  sx={{
                    width: 92,
                    height: 92,
                    objectFit: "cover",
                    borderRadius: 2,
                    cursor: "pointer",
                    border:
                      activeImage === img
                        ? "2px solid var(--color-primary)"
                        : "2px solid transparent",
                    boxShadow: "0 6px 14px rgba(48,59,77,0.08)",
                  }}
                />
              ))}
            </Stack>
          </Box>

          {/* RIGHT: DETAILS */}
          <Box sx={{ pt: { xs: 0, md: 1 } }}>
            <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: "wrap" }}>
              {product.sale && (
                <Chip
                  label="Sale"
                  sx={{
                    bgcolor: "var(--color-primary)",
                    color: "var(--color-white)",
                    fontWeight: 700,
                  }}
                />
              )}
              {product.newArrival && (
                <Chip
                  label="New Arrival"
                  sx={{
                    bgcolor: "var(--color-title)",
                    color: "var(--color-white)",
                    fontWeight: 700,
                  }}
                />
              )}
              <Chip
                label={product.category}
                variant="outlined"
                sx={{
                  borderColor: "rgba(48,59,77,0.2)",
                  color: "var(--color-title)",
                  fontWeight: 700,
                }}
              />
            </Stack>

            <Typography
              variant="h3"
              sx={{
                color: "var(--color-title)",
                fontWeight: 800,
                lineHeight: 1.1,
              }}
            >
              {product.name}
            </Typography>

            <Stack
              direction="row"
              alignItems="center"
              spacing={1.2}
              sx={{ mt: 2 }}
            >
              <Rating
                value={product.rating}
                precision={0.1}
                readOnly
                sx={{
                  "& .MuiRating-iconFilled": { color: "var(--color-primary)" },
                }}
              />
              <Typography sx={{ color: "var(--color-text)", fontSize: 14 }}>
                {product.rating} · {product.reviewsCount} reviews
              </Typography>
            </Stack>

            <Stack
              direction="row"
              alignItems="baseline"
              spacing={2}
              sx={{ mt: 3 }}
            >
              <Typography
                variant="h4"
                sx={{ color: "var(--color-title)", fontWeight: 900 }}
              >
                ${product.finalPrice.toFixed(2)}
              </Typography>

              {product.sale && (
                <>
                  <Typography
                    sx={{
                      color: "#9aa3aa",
                      textDecoration: "line-through",
                      fontSize: 18,
                    }}
                  >
                    ${product.price.toFixed(2)}
                  </Typography>

                  <Chip
                    label={`-${product.discount}%`}
                    size="small"
                    sx={{
                      bgcolor: "rgba(252,131,14,0.12)",
                      color: "var(--color-primary)",
                      fontWeight: 800,
                    }}
                  />
                </>
              )}
            </Stack>

            <Typography
              sx={{
                mt: 3,
                color: "var(--color-text)",
                lineHeight: 1.8,
                fontSize: 16,
              }}
            >
              {product.description}
            </Typography>

            <Divider sx={{ my: 3 }} />

            <Stack
              direction="row"
              spacing={2}
              sx={{ flexWrap: "wrap", rowGap: 1.5 }}
            >
              <Chip label={`Brand: ${product.brand}`} />
              <Chip label={`Material: ${product.material}`} />
              <Chip label={`Color: ${product.color}`} />
              <Chip
                label={
                  product.stock > 0
                    ? `${product.stock} in stock`
                    : "Out of stock"
                }
                sx={{
                  bgcolor:
                    product.stock > 0
                      ? "rgba(76,175,80,0.1)"
                      : "rgba(244,67,54,0.1)",
                  color: product.stock > 0 ? "#2e7d32" : "#c62828",
                  fontWeight: 700,
                }}
              />
            </Stack>

            <Box
              sx={{
                mt: 4,
                p: 2.2,
                borderRadius: 3,
                bgcolor: "rgba(187,206,213,0.18)",
                border: "1px solid rgba(48,59,77,0.08)",
              }}
            >
              <Stack direction="row" alignItems="center" spacing={1.2}>
                <LocalShippingOutlinedIcon
                  sx={{ color: "var(--color-primary)" }}
                />
                <Typography
                  sx={{ color: "var(--color-title)", fontWeight: 700 }}
                >
                  Free delivery on selected items
                </Typography>
              </Stack>

              <Stack
                direction="row"
                alignItems="center"
                spacing={1.2}
                sx={{ mt: 1.5 }}
              >
                <VerifiedOutlinedIcon sx={{ color: "var(--color-primary)" }} />
                <Typography sx={{ color: "var(--color-text)" }}>
                  Quality checked and securely packaged
                </Typography>
              </Stack>
            </Box>

            <Stack
              direction="row"
              alignItems="center"
              spacing={2}
              sx={{ mt: 4 }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  border: "1px solid rgba(48,59,77,0.12)",
                  borderRadius: 999,
                  overflow: "hidden",
                }}
              >
                <IconButton
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  sx={{ borderRadius: 0, px: 2 }}
                >
                  <RemoveIcon fontSize="small" />
                </IconButton>

                <Typography
                  sx={{ minWidth: 40, textAlign: "center", fontWeight: 700 }}
                >
                  {qty}
                </Typography>

                <IconButton
                  onClick={() => setQty((q) => Math.min(product.stock, q + 1))}
                  sx={{ borderRadius: 0, px: 2 }}
                  disabled={qty >= product.stock}
                >
                  <AddIcon fontSize="small" />
                </IconButton>
              </Box>

              <Button
                variant="contained"
                onClick={handleAddToCart}
                disabled={product.stock === 0}
                sx={{
                  px: 4,
                  py: 1.4,
                  borderRadius: 999,
                  bgcolor: "var(--color-primary)",
                  color: "var(--color-white)",
                  fontWeight: 800,
                  "&:hover": { bgcolor: "var(--color-primary-hover)" },
                }}
              >
                Add to Cart
              </Button>

              <IconButton onClick={() => toggleFavorite(product)}>
                {isFav ? (
                  <FavoriteIcon sx={{ color: "#fc830e" }} />
                ) : (
                  <FavoriteBorderIcon />
                )}
              </IconButton>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ProductDetailsPage;
