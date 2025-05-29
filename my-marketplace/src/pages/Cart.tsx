// src/pages/Cart.tsx
import React, { useContext } from 'react';
import { Box, Typography, List, ListItem, ListItemText, Button } from '@mui/material';
import { CartContext } from '../context/CartContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Cart = () => {
  const [cartState] = useContext(CartContext);

  return (
    <Box>
      <Header />
      <Box sx={{ p: 6 }}>
        <Typography variant="h4" component="h1">
          Cart
        </Typography>
        <List>
          {Object.keys(cartState.items).map((id) => (
            <ListItem key={id}>
              <ListItemText primary={`Product ${id}`} secondary={`Quantity: ${cartState.items[id]}`} />
            </ListItem>
          ))}
        </List>
        <Button variant="contained" color="primary">
          Checkout
        </Button>
      </Box>
      <Footer />
    </Box>
  );
};

export default Cart;