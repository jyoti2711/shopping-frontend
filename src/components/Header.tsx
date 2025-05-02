import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import IOP from "../assets/OIP.jpeg"; // Correct logo import

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      {/* Logo Section */}
      <div className="logo">
        <img src={IOP} alt="ShopEasy Logo" />
        <span>ShopEasy</span>
      </div>

      {/* Hamburger Menu */}
      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      {/* Mobile Navigation */}
      <nav className={`mobile-nav-links ${menuOpen ? "show" : ""}`}>
        <Link to="/Home">Home</Link>
        <Link to="/ProductList">Products</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
