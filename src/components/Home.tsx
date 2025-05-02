import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

import bnner from "../assets/bnner.jpeg";
import bnner2 from "../assets/bnner2.png";
import bnner3 from "../assets/bnner3.jpg";
import bnner4 from "../assets/bnner4.jpg";
import men1 from "../assets/men1.png";
import electronic from "../assets/electronic.png";
import gold from "../assets/gold.jpg";

const images = [bnner, bnner2, bnner3, bnner4];

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true); // Fade-out effect
      setTimeout(() => {
        setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
        setFade(false); // Fade-in effect
      }, 1000); // 1-second delay for smooth transition
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-page">
      <header className="banner-section">
        <div className="banner-content">
          <img
            src={images[currentImage]}
            alt="Banner"
            className={`banner-image ${fade ? "fade-out" : "fade-in"}`}
          />
          <div className="banner-overlay">
            <h1>Welcome to ShopEasy</h1>
            <p>Your one-stop shop for amazing deals and products!</p>
            <Link to="/ProductList" className="shop-now-btn">
              Shop Now
            </Link>
          </div>
        </div>
      </header>

      {/* Product Links */}
      <div className="product">
        <Link to="/electronics">
          <img src={electronic} alt="Electronic" />
          <p>Electronic</p>
        </Link>
      </div>

      <div className="product">
        <Link to="/men">
          <img src={men1} alt="Men" />
          <p>Men</p>
        </Link>
      </div>

      <div className="product">
        <Link to="/gold">
          <img src={gold} alt="Gold" />
          <p>Gold</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;