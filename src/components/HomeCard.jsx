import { Box, Typography } from "@mui/material";
import useInView from "../hooks/useInView";

const HomeCard = ({ image, title, subtitle, large, animation }) => {
      const [ref, isVisible] = useInView();
  return (
    <Box
     ref={ref}
        className={`card ${large ? "card-large" : ""} ${
        isVisible ? animation : ""
      }`}
      sx={{
        backgroundImage: `url(${image})`,
      }}
    >
      {/* overlay */}
      <Box className="card-overlay" />

      {/* content */}
      <Box className="card-content">
        <Typography variant="h4" className="card-title" sx={{marginBottom:2}}>{title}</Typography>
        <Typography className="card-subtitle" sx={{fontSize:14}}>{subtitle}</Typography>
        <button className="card-btn">Shop Now</button>
      </Box>
    </Box>
  );
};

export default HomeCard;
