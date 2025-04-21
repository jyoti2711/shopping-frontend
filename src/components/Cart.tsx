import React from 'react';
import { Trash2 } from 'lucide-react';
import './Cart.css';

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
  const getTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-semibold mb-6 text-center">🛒 Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-center mt-10 text-lg">
          🛍️ Your cart is empty. Start adding some items!
        </p>
      ) : (
        <div className="space-y-4">
          {cartItems.map(item => (
            <div
              key={item.id}
              className="cart-item flex items-center justify-between p-4 border rounded-lg shadow-sm hover:shadow-md transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 object-contain border rounded"
              />
              <div className="flex-1 ml-4">
                <h4 className="font-medium text-lg">{item.title}</h4>
                <p className="text-sm text-gray-600">${item.price}</p>
                <div className="flex items-center mt-2 space-x-2">
                  <button
                    onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity === 1}
                    className="bg-gray-200 px-3 py-1 rounded text-lg hover:bg-gray-300 disabled:opacity-50"
                  >
                    -
                  </button>
                  <span className="px-3 py-1 bg-gray-100 rounded border">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                    className="bg-gray-200 px-3 py-1 rounded text-lg hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                onClick={() => onRemove(item.id)}
                className="text-red-500 hover:text-red-600 transition"
              >
                <Trash2 size={20} />
              </button>
            </div>
          ))}

          <div className="text-right font-bold text-xl mt-4">
            Total: ${getTotal()}
          </div>

          <div className="text-right mt-6">
            <button className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
