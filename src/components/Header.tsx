import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

// Props for the Header component
type HeaderProps = {
  searchQuery: string;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearchSubmit: (event: React.FormEvent) => void; // A new prop to handle the search submission
};

const Header: React.FC<HeaderProps> = ({ searchQuery, onSearchChange, onSearchSubmit }) => {
  return (
    <header className="header">
      {/* Logo Section */}
      <div className="logo">
        <span>ShopEasy</span>
      </div>

      {/* Desktop Navigation */}
      <nav className="desktop-nav-links">
        <Link to="/Home">Home</Link>
        <Link to="/ProductList">Products</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      {/* Search Bar */}
      <form className="search-bar" onSubmit={onSearchSubmit}> {/* Added onSubmit handler */}
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={onSearchChange} // Update the search query state in App
          aria-label="Search"
        />
        <button type="submit" aria-label="Search button">
          🔍 {/* You can use a search icon or text */}
        </button>
      </form>
    </header>
  );
};

export default Header;
