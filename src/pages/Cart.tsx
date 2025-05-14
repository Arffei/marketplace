import { useState } from 'react';
import { Container, List, ListItem, Typography, Button } from '@mui/material';

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Корзина</Typography>
      <List>
        {cartItems.map((item) => (
          <ListItem key={item.id}>
            {/* Реализуйте отображение товаров */}
          </ListItem>
        ))}
      </List>
      <Typography variant="h6">Итого: {total} руб.</Typography>
      <Button variant="contained" color="primary" sx={{ mt: 2 }}>
        Оформить заказ
      </Button>
    </Container>
  );
}