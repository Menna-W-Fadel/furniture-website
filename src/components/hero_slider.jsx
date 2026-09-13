import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const slides = [
  "/assets/empty-living-room-with-blue-sofa-plants-and-table-on-empty-white-wall-.jpg",
  "/assets/empty-living-room-with-blue-sofa-.jpg",
  "/assets/empty-living-room-with-sofa-and-table-on-empty-white-wall-.jpg",
];

const HeroSlider = () => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero">
      {slides.map((slide, i) => (
        <div
          key={slide}
          className={`hero-slide ${i === index ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide})` }}
        />
      ))}

      <div className="hero-content">
        <h1>The Furniture That Defines You</h1>
        <p>
          Your comfort and aesthetic design suitable for you is before anything
          else
        </p>
        <button className="btn-primary" onClick={() => navigate("/shop")}>
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default HeroSlider;
