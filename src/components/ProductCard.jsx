import React, { useState } from "react";
import {
  Card,
  CardContent,
  Box,
  Typography,
  Button,
  Chip,
  Rating,
  IconButton,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/cartContext";
import { useFavorites } from "../context/favouritesContext";

const ProductCard = ({
  id,
  slug,
  name,
  image,
  price,
  finalPrice,
  discount,
  sale,
  rating = 4,
  reviewsCount = 0,
  category,
  stock,
  newArrival,
}) => {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { favorites, toggleFavorite } = useFavorites();
const isFav = favorites.some((item) => item.id === id);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart({ id, slug, name, image, price, finalPrice, quantity: 1 });
  };

  return (
    <Card
      onClick={() => navigate(`/shop/${slug}`)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      sx={{
        position: "relative",
        borderRadius: 3,
        overflow: "hidden",
        cursor: "pointer",
        boxShadow: hovered
          ? "0 18px 45px rgba(48,59,77,0.14)"
          : "0 6px 18px rgba(48,59,77,0.08)",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        transition: "all 0.35s ease",
        bgcolor: "var(--color-white)",
      }}
    >
      <Box sx={{ position: "relative", overflow: "hidden" }}>
        <Box
          component="img"
          src={image}
          alt={name}
          sx={{
            width: "100%",
            height: 260,
            objectFit: "cover",
            transform: hovered ? "scale(1.08)" : "scale(1)",
            transition: "transform 0.6s ease",
            display: "block",
          }}
        />

        {sale && (
          <Box
            sx={{
              position: "absolute",
              top: 14,
              left: 14,
              width: 58,
              height: 58,
              borderRadius: "50%",
              bgcolor: "var(--color-primary)",
              color: "var(--color-white)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 6px 16px rgba(252,131,14,0.35)",
              fontSize: 12,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: 0.5,
              zIndex: 2,
            }}
          >
            Sale!
          </Box>
        )}

        {newArrival && (
          <Chip
            label="New"
            sx={{
              position: "absolute",
              top: 14,
              left: sale ? 84 : 14,
              bgcolor: "var(--color-title)",
              color: "var(--color-white)",
              fontWeight: 700,
              zIndex: 2,
            }}
          />
        )}

        <Box
          sx={{
            position: "absolute",
            top: 14,
            right: 14,
            display: "flex",
            flexDirection: "column",
            gap: 1,
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateX(0)" : "translateX(12px)",
            transition: "all 0.3s ease",
            zIndex: 2,
          }}
        >
          <IconButton
            onClick={(e) => {
              e.stopPropagation();
              toggleFavorite({ id, slug, name, image, price, finalPrice });
            }}
            sx={{
              width: 38,
              height: 38,
              bgcolor: "rgba(255,255,255,0.95)",
              boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
              "&:hover": {
                bgcolor: "var(--color-primary)",
                color: "var(--color-white)",
              },
            }}
          >
            {isFav ? (
              <FavoriteIcon sx={{ fontSize: 18, color: "#fc830e" }} />
            ) : (
              <FavoriteBorderIcon sx={{ fontSize: 18 }} />
            )}
          </IconButton>

          <IconButton
            sx={{
              width: 38,
              height: 38,
              bgcolor: "rgba(255,255,255,0.95)",
              boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
              "&:hover": {
                bgcolor: "var(--color-primary)",
                color: "var(--color-white)",
              },
            }}
          >
            <VisibilityOutlinedIcon sx={{ fontSize: 18 }} />
          </IconButton>
        </Box>

        <Box
          onClick={handleAddToCart}
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            py: 1.35,
            bgcolor: "var(--color-title)",
            color: "var(--color-white)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateY(0)" : "translateY(100%)",
            transition: "all 0.35s ease",
            "&:hover": {
              bgcolor: "var(--color-primary)",
            },
          }}
        >
          <ShoppingCartOutlinedIcon sx={{ fontSize: 18 }} />
          <Typography sx={{ fontSize: 13, fontWeight: 700, letterSpacing: 1 }}>
            Add to Cart
          </Typography>
        </Box>
      </Box>

      <CardContent sx={{ p: 2.5 }}>
        <Typography
          sx={{
            fontSize: 12,
            fontWeight: 700,
            color: "var(--color-primary)",
            textTransform: "uppercase",
            letterSpacing: 1,
            mb: 0.8,
          }}
        >
          {category}
        </Typography>

        <Typography
          sx={{
            fontSize: 16,
            fontWeight: 700,
            color: "var(--color-title)",
            mb: 1,
            lineHeight: 1.25,
          }}
        >
          {name}
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1.2 }}>
          <Rating
            value={rating}
            precision={0.1}
            readOnly
            size="small"
            sx={{
              "& .MuiRating-iconFilled": { color: "var(--color-primary)" },
            }}
          />
          <Typography sx={{ fontSize: 12, color: "var(--color-text)" }}>
            ({reviewsCount})
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "baseline", gap: 1.2 }}>
          <Typography
            sx={{
              fontSize: 19,
              fontWeight: 800,
              color: "var(--color-title)",
            }}
          >
            ${finalPrice.toFixed(2)}
          </Typography>

          {sale && (
            <>
              <Typography
                sx={{
                  fontSize: 13,
                  color: "#999",
                  textDecoration: "line-through",
                }}
              >
                ${price.toFixed(2)}
              </Typography>

              <Chip
                label={`-${discount}%`}
                size="small"
                sx={{
                  bgcolor: "rgba(252,131,14,0.12)",
                  color: "var(--color-primary)",
                  fontWeight: 700,
                }}
              />
            </>
          )}
        </Box>

        <Typography sx={{ mt: 1.2, fontSize: 12, color: "var(--color-text)" }}>
          {stock > 0 ? `${stock} in stock` : "Out of stock"}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
