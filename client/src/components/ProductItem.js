// client/src/components/ProductItem.js

import React, { useContext } from 'react';
import { ItemContext } from '../context/ItemContext';

const ProductItem = ({ product }) => {
  const { addItemToCart } = useContext(ItemContext);

  return (
    <li className="product-item">
      <img src={product.image} alt={product.name} className="product-img" />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p><strong>₹{product.price}</strong></p>
      <button onClick={() => addItemToCart(product)}>Add to Cart</button>
    </li>
  );
};

export default ProductItem;
