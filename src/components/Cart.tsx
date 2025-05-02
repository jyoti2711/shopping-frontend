import React from "react";
import "./Cart.css";

type CartItem = {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
};

type CartProps = {
  cartItems: CartItem[];
  onRemove: (id: number) => void;
  onUpdateQuantity: (id: number, quantity: number) => void;
};

const Cart: React.FC<CartProps> = ({ cartItems, onRemove, onUpdateQuantity }) => {
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((product) => (
            <div key={product.id} className="cart-item">
              <img src={product.image} alt={product.title} />
              <h4>{product.title}</h4>
              <p>${product.price}</p>
              <input
                type="number"
                min="1"
                value={product.quantity}
                onChange={(e) => onUpdateQuantity(product.id, parseInt(e.target.value))}
              />
              <button onClick={() => onRemove(product.id)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
