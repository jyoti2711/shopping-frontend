import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"; // Added Navigate import

import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import Contact from "./components/Contact";
import { CartItem } from "./components/types"; // Correct import

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]); // Restore state

  const handleRemove = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleUpdateQuantity = (id: number, quantity: number) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(quantity, 1) } : item
      )
    );
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/Home" />} /> {/* Redirect to Home */}
        <Route path="/Home" element={<Home />} />
        <Route path="/ProductList" element={<ProductList />} />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems} // Restore Cart
              onRemove={handleRemove}
              onUpdateQuantity={handleUpdateQuantity}
            />
          }
        />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;