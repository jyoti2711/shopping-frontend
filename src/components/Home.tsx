// Home.tsx
import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to ShopEasy</h1>
      <p>Select from a variety of categories</p>
      <div className="categories">
        <div className="category-card">Clothing</div>
        <div className="category-card">Electronics</div>
        <div className="category-card">Home Appliances</div>
        <div className="category-card">Beauty</div>
        <div className="category-card">Footwear</div>
        {/* Add more categories if needed */}
      </div>
    </div>
  );
};

export default Home;
