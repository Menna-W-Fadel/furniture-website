import { useEffect, useState } from "react";
const slides = [ "/assets/empty-living-room-with-blue-sofa-plants-and-table-on-empty-white-wall-.jpg", "/assets/empty-living-room-with-blue-sofa-.jpg", "/assets/empty-living-room-with-sofa-and-table-on-empty-white-wall-.jpg"];

const HeroSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero">
      {/* Background slides */}
      {slides.map((slide, i) => (
        <div
          key={slide}
          className={`hero-slide ${i === index ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide})` }}
        />
      ))}

      {/* Overlay content */}
      <div className="hero-content" style={{width:"28%"}}>
        <h1>The Furniture That Defines You</h1>
        <p>
          Your comfort and aesthetic design suitable for you is before anything
          else
        </p>
        <button className="btn-primary">Shop Now</button>
      </div>
    </div>
  );
};

export default HeroSlider;