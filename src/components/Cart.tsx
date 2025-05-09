// Cart.tsx
import React from "react";
import { useCart } from "./cartContact";

const Cart: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity, calculateTotal } = useCart();

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id}>
            <h4>{item.title}</h4>
            <p>Price: ${item.price}</p>
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
            />
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))
      )}
      <h3>Total: ${calculateTotal()}</h3>
    </div>
  );
};

export default Cart;
