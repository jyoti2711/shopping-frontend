import React, { useEffect, useState } from 'react';
import './ProductList.css';

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(error => console.error("Failed to fetch products:", error));
  }, []);

  return (
    <div className="product-list-container">
      <h2>Products</h2>
      <div className="product-grid">
        {products.map(product => (
          <div className="product-card" key={product.id}>
          <img src={product.image} alt={product.title} />
            <h4>{product.title}</h4>
            <p>${product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

// 👇 Add this to make it a module for isolatedModules error
export {};


