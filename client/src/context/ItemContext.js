import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create context
export const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);

  // ✅ Fetch products from backend when component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/products');
        setProducts(res.data);
      } catch (error) {
        console.error('❌ Failed to fetch products:', error);
      }
    };

    fetchProducts();
  }, []);

  // ✅ Add item to cart
  const addItemToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
  };

  // ✅ Remove item from cart
  const removeItemFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item._id !== id));
  };

  // ✅ Clear cart (optional, e.g. after Buy Now)
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <ItemContext.Provider
      value={{
        cartItems,
        addItemToCart,
        removeItemFromCart,
        clearCart,
        products
      }}
    >
      {children}
    </ItemContext.Provider>
  );
};
