import { Box, Grid, Typography } from "@mui/material";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const features = [
  {
    icon: <LocalShippingOutlinedIcon fontSize="inherit"/>,
    title: "Free Shipping",
    subtitle: "On all orders above $50",
  },
  {
    icon: <WorkspacePremiumOutlinedIcon fontSize="inherit"/>,
    title: "30 Days Warranty",
    subtitle: "30 days money back guarantee",
  },
  {
    icon: <PublicOutlinedIcon fontSize="inherit"/>,
    title: "Global Shipping",
    subtitle: "Support Worldwide Shipping",
  },
  {
    icon: <LockOutlinedIcon fontSize="inherit"/>,
    title: "100% Secure",
    subtitle: "100% Secure Checkout",
  },
];

const FeaturesBar = () => {
  return (
    <Box
      sx={{
        backgroundColor: "var(--color-white)",
        py: 4,
        px: { xs: 2, md: 8 },
      }}
    >
      <Grid container spacing={3}>
        {features.map((item, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              {/* ICON */}
              <Box
                sx={{
                  color: "var(--color-primary)",
                  fontSize: { xs: 32, md: 45 },
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {item.icon}
              </Box>

              {/* TEXT */}
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  sx={{
                    color: "var(--color-title)",
                    fontWeight: 600,
                    fontSize: { xs: "1.05rem", md: "1.7rem" },
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  sx={{
                    color: "var(--color-text)",
                    fontSize: "0.85rem",
                  }}
                >
                  {item.subtitle}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturesBar;