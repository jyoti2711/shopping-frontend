import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Home from './components/Home';
import ProductList from './components/ProductList';
import Contact from './components/Contact';

// Dummy data for cart
function App() {
  const [cartItems, setCartItems] = useState<any[]>([]);

  const handleRemove = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleUpdateQuantity = (id: number, quantity: number) => {
    setCartItems(
      cartItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ProductList" element={<ProductList />} />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
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
}

export default App;
