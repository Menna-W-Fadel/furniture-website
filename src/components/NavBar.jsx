import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  Badge,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { NavLink, useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { useCart } from "../context/cartContext";
import { useFavorites } from "../context/favouritesContext";
const pages = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const { favorites } = useFavorites();
  const totalFavorites = favorites.length;
  const toggleDrawer = () => setOpen(!open);
  const navLinkStyle = ({ isActive }) => ({
    textDecoration: "none",
    color: "#303b4d",
    fontWeight: 500,
    position: "relative",
    paddingBottom: "5px",

    // remove borderBottom
    borderBottom: "none",

    // pseudo underline
    "&::after": {
      content: '""',
      position: "absolute",
      width: isActive ? "100%" : "0%",
      height: "2px",
      bottom: 0,
      left: 0,
      backgroundColor: "#fc830e",
      transition: "0.3s",
    },

    "&:hover::after": {
      width: "100%",
    },
  });

  return (
    <AppBar position="static" elevation={0} sx={{ background: "#fff", px: 2 }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* LEFT - LOGO */}
        <Box
          component="img"
          src={"/assets/logo_furneta.png"}
          alt="Furniture Logo"
          onClick={() => navigate("/")}
          sx={{
            height: { xs: 40, md: 50 },
            cursor: "pointer",
            objectFit: "contain",
          }}
        />

        {/* MIDDLE - NAV LINKS */}
        {!isMobile && (
          <Box sx={{ display: "flex", gap: 4 }}>
            {pages.map((page) => (
              <Box
                key={page.name}
                component={NavLink}
                to={page.path}
                sx={({ isActive }) => ({
                  textDecoration: "none",
                  color: "#303b4d",
                  fontWeight: 500,
                  position: "relative",
                  pb: "5px",

                  "&::after": {
                    content: '""',
                    position: "absolute",
                    width: isActive ? "100%" : "0%",
                    height: "2px",
                    bottom: 0,
                    left: 0,
                    backgroundColor: "#fc830e",
                    transition: "0.3s",
                  },

                  "&:hover::after": {
                    width: "100%",
                  },
                })}
              >
                {page.name}
              </Box>
            ))}
          </Box>
        )}

        {/* RIGHT - ICONS */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {!isMobile && (
            <>
              <IconButton onClick={() => navigate("/favorites")}>
                <Badge
                  badgeContent={totalFavorites > 0 ? totalFavorites : null}
                  showZero
                  sx={{
                    "& .MuiBadge-badge": {
                      backgroundColor: "#fc830e",
                      color: "#fff",
                      fontWeight: 700,
                    },
                  }}
                >
                  {totalFavorites > 0 ? (
                    <FavoriteIcon sx={{ color: "#fc830e" }} />
                  ) : (
                    <FavoriteBorderIcon sx={{ color: "#303b4d" }} />
                  )}
                  {/* <FavoriteBorderIcon sx={{ color: "#303b4d" }} /> */}
                </Badge>
              </IconButton>

              <IconButton onClick={() => navigate("/login")}>
                <PersonIcon sx={{ color: "#303b4d" }} />
              </IconButton>

              <IconButton onClick={() => navigate("/cart")}>
                <Badge
                  badgeContent={totalItems > 0 ? totalItems : null}
                  showZero
                  sx={{
                    "& .MuiBadge-badge": {
                      backgroundColor: "#fc830e",
                      color: "#fff",
                    },
                  }}
                >
                  <ShoppingCartOutlinedIcon sx={{ color: "#303b4d" }} />
                </Badge>
              </IconButton>
            </>
          )}

          {/* MOBILE MENU BUTTON */}
          {isMobile && (
            <IconButton onClick={toggleDrawer}>
              <MenuIcon sx={{ color: "#303b4d" }} />
            </IconButton>
          )}
        </Box>
      </Toolbar>

      {/* MOBILE DRAWER */}
      <Drawer anchor="right" open={open} onClose={toggleDrawer}>
        <Box sx={{ width: 250, p: 2 }}>
          <List>
            {pages.map((page) => (
              <ListItem
                button
                key={page.name}
                onClick={() => {
                  navigate(page.path);
                  toggleDrawer();
                }}
              >
                <ListItemText primary={page.name} />
              </ListItem>
            ))}

            <ListItem button onClick={() => navigate("/favorites")}>
              <ListItemText primary="Favorites" />
            </ListItem>

            <ListItem button onClick={() => navigate("/login")}>
              <ListItemText primary="Sign In" />
            </ListItem>

            <ListItem button onClick={() => navigate("/cart")}>
              <ListItemText primary="Cart" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default NavBar;
