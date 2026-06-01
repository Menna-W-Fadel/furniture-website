
import React from "react";
import { useProducts } from "../context/productsContext";
import ProductCard from "../components/ProductCard";

const ShopPage = () => {
  const {
    filteredProducts,
    categories,
    setSelectedCategory,
    setSearchTerm,
    setSort,
  } = useProducts();

  return (
    <div>
      {/* ===== HERO ===== */}
      <div className="shop-hero">
        <div className="shop-overlay"></div>

        <div className="shop-hero-content">
          <h1 className="word-outline">SHOP</h1>

          <h2 style={{fontSize:30}}>Shop</h2>

          <p style={{fontSize:20}}>
            Discover furniture that reflects your personality and elevates your space.
          </p>
        </div>
      </div>

      {/* ===== CONTROLS ===== */}
      <div className="shop-controls">
        <h2 className="section-title">Latest Products</h2>

        <div className="controls-right">
          <input
            placeholder="Search..."
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <select onChange={(e) => setSort(e.target.value)}>
            <option value="">Default</option>
            <option value="low">Price Low</option>
            <option value="high">Price High</option>
          </select>
        </div>
      </div>

      {/* ===== MAIN ===== */}
      <div className="shop-layout">
        
        {/* ===== SIDEBAR ===== */}
        <div className="shop-sidebar">
          <h3>Categories</h3>

          {categories.map((cat) => (
            <div
              key={cat}
              className="category-item"
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </div>
          ))}
        </div>

        {/* ===== PRODUCTS ===== */}
        <div className="products-grid">
          {filteredProducts.map((item) => (
            <ProductCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;