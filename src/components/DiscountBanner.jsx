import React from "react";

const DiscountBanner = () => {
  return (
    <div className="hero">
      {/* Background slides */}
      <div
        className="hero-slide active"
        style={{ backgroundImage: `url("/assets/blue-living-room-with-modern-furniture.jpg")` }}
      />

      {/* Overlay content */}
      <div className="hero-content" style={{ width: "45%" }}>
        <h2 style={{fontSize:45}}>Discount up to 35% for first purchase only this month.</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <button className="btn-primary">Shop Now</button>
      </div>
    </div>
  );
};

export default DiscountBanner;
