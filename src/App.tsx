import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import { CartProvider } from "./components/cartContact";
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import Contact from "./components/Contact";

// Define the Product type
type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Fetch products from API
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Failed to fetch products:", error));
  }, []);

  // Filter products based on search query
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle search input change
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <Router>
      <CartProvider>
        <Header searchQuery={searchQuery} onSearchChange={handleSearchChange} />
        <Routes>
          <Route path="/" element={<Navigate to="/Home" />} />
          <Route path="/Home" element={<Home />} />
          <Route
            path="/ProductList"
            element={<ProductList products={filteredProducts} />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </CartProvider>
    </Router>
  );
};

export default App;
