import { useNavigate } from "react-router-dom";

const DiscountBanner = () => {
  const navigate = useNavigate();

  return (
    <div className="hero">
      <div
        className="hero-slide active"
        style={{ backgroundImage: `url("/assets/blue-living-room-with-modern-furniture.jpg")` }}
      />

      <div className="hero-content">
        <h2 className="discount-banner-title">Discount up to 35% for first purchase only this month.</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <button className="btn-primary" onClick={() => navigate("/shop")}>
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default DiscountBanner;
