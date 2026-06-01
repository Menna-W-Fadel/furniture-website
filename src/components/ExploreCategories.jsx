import React from "react";
import HomeCard from "../components/HomeCard";
import { Box, Typography } from "@mui/material";
import useInView from "../hooks/useInView";

const cardData = [
  {
    id: 1,
    title: "Bed & Mattreses",
    subtitle:
      "Lorem mollis efficitur proin imperdiet curabitur luctus egestas fames",
    image: "/assets/bed-in-modern-bedroom.jpg",
  },
  {
    id: 2,
    title: "Chairs",
    subtitle:
      "Lorem mollis efficitur proin imperdiet curabitur luctus egestas fames",
    image: "/assets/living-room-interior-with-minimalist-furnishing.jpg",
  },
  {
    id: 3,
    title: "Accessories",
    subtitle:
      "Lorem mollis efficitur proin imperdiet curabitur luctus egestas fames",
    image: "/assets/lavender-in-a-vase.jpg",
  },
  {
    id: 4,
    title: "Tables",
    subtitle:
      "Lorem mollis efficitur proin imperdiet curabitur luctus egestas fames",
    image:  "/assets/minimalist-photo-of-chair-1.jpg",
  },
  {
    id: 5,
    title: "Lightning",
    subtitle:
      "Lorem mollis efficitur proin imperdiet curabitur luctus egestas fames",
    image: "/assets/industrial-hanging-lightbulb.jpg",
  },
  {
    id: 6,
    title: "Cabinet",
    subtitle:
      "Lorem mollis efficitur proin imperdiet curabitur luctus egestas fames",
    image: "/assets/mock-up-poster-frame-on-cabinet-in-interior-.jpg",
  },
];
const ExploreCategories = () => {
  const firstRowCards = cardData.slice(0, 2);
  const secondRowCards = cardData.slice(2);

  const [textRef, textVisible] = useInView();
  return (
    <div>
      <Box className="home-section">
        {/* FIRST ROW */}
        <Box className="row row-top">
          {/* LEFT TEXT */}
          <Box
            ref={textRef}
            className={`left-text ${textVisible ? "animate-left" : ""}`}
          >
            <Typography
              variant="h4"
              className="section-title"
              sx={{ marginBottom: 3 }}
            >
              Most popular product categories
            </Typography>

            <Typography
              className="section-subtitle"
              sx={{ fontWeight: "500", marginBottom: 3 }}
            >
              Lorem mollis efficitur proin imperdiet curabitur luctus egestas
              fames
            </Typography>

            <button className="btn-primary">Explore Products</button>
          </Box>

          {/* RIGHT CARDS */}
          <Box className="right-cards">
            {firstRowCards.map((item) => (
              <HomeCard
                key={item.id}
                {...item}
                large
                animation="animate-right"
              />
            ))}
          </Box>
        </Box>

        {/* SECOND ROW */}
        <Box className="row row-bottom">
          {secondRowCards.map((item, index) => {
            let animation = "";

            if (index === 0) animation = "animate-left";
            else if (index === 3) animation = "animate-right";
            else animation = "animate-bottom";

            return <HomeCard key={item.id} {...item} animation={animation} />;
          })}
        </Box>
      </Box>
    </div>
  );
};

export default ExploreCategories;
