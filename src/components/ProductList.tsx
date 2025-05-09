// ProductList.tsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProductList.css";
import { useCart } from "./cartContact"; // ✅ use context instead of props

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const navigate = useNavigate();
  const { addToCart } = useCart();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Failed to fetch products:", error));
  }, []);

  const handleAddToCart = (product: Product) => {
    addToCart({ ...product, quantity: 1 });
    alert(`${product.title} added to cart!`);
    navigate("/cart");
  };

  return (
    <div className="product-list-container">
      <h2>Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.title} />
            <h4>{product.title}</h4>
            <p>${product.price}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
