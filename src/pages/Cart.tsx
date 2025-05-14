// pages/Cart.tsx
import { Container, Typography, Button } from '@mui/material';

export default function Cart() {
  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Корзина
      </Typography>
      <Typography variant="body1">Ваша корзина пуста</Typography>
      <Button 
        variant="contained" 
        color="primary" 
        sx={{ mt: 2 }}
        href="/"
      >
        Вернуться к покупкам
      </Button>
    </Container>
  );
}