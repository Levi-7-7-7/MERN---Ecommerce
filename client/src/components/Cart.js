import React, { useContext } from 'react';
import { ItemContext } from '../context/ItemContext';

const Cart = () => {
  const { cartItems, removeItemFromCart } = useContext(ItemContext);

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <h2>🛒 Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index} style={{ marginBottom: "10px" }}>
              {item.name} - ₹{item.price}
              <button onClick={() => removeItemFromCart(item._id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ₹{total}</h3>
    </div>
  );
};

export default Cart;
