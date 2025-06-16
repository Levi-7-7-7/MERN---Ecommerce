import React from 'react';
import ProductList from './components/ProductList';
import Header from './components/Header';
import './App.css';
import { ItemProvider } from './context/ItemContext'; // ✅ named import
import Cart from './components/Cart'; // ✅


const App = () => {
  return (
    <ItemProvider>
      <Header />
      <Cart /> {/* ✅ Show Cart */}
      <ProductList />
    </ItemProvider>
  );
};

export default App;






