import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">🛍️ ShopEasy</div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <nav className={`nav-links ${menuOpen ? "show" : ""}`}>
        <a href="/">Home</a>
        <a href="/ProductList">Products</a>
        <a href="/cart">Cart</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
