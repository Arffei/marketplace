// src/components/FavoriteButton.tsx
import React, { useContext } from 'react';
import { IconButton, AddShoppingCart } from '@mui/material';
import { CartContext } from '../../context/CartContext';

export default function FavoriteButton({ product }) {
  const [, dispatch] = useContext(CartContext);

  const handleAddToFavorites = () => {
    dispatch({ type: 'ADD_TO_FAVORITES', payload: product });
  };

  return (
    <IconButton onClick={handleAddToFavorites}>
      <AddShoppingCart />
    </IconButton>
  );
}