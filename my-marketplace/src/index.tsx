// src/index.tsx
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Favorite from './pages/Favorite';
import Account from './pages/Account';
import { CartProvider } from './context/CartContext';

render(
  <ThemeProvider theme={theme}>
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favorites" element={<Favorite />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </Router>
    </CartProvider>
  </ThemeProvider>,
  document.getElementById('root')
);