import { Container, Typography, Button, Box, List, ListItem, Divider } from '@mui/material';
import { useCart } from '../context/CartContext';
import { products } from '../mockData';

export default function Cart() {
  const { cart, removeFromCart } = useCart();
  
  // Получаем товары в корзине
  const cartProducts = products.filter(p => cart.includes(p.id));
  
  const total = cartProducts.reduce((sum, product) => sum + product.price, 0);

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>Корзина</Typography>
      
      {cartProducts.length === 0 ? (
        <Typography>Ваша корзина пуста</Typography>
      ) : (
        <>
          <List>
            {cartProducts.map(product => (
              <ListItem key={product.id} sx={{ py: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    style={{ width: 80, height: 80, objectFit: 'contain', marginRight: 16 }}
                  />
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="h6">{product.name}</Typography>
                    <Typography>{product.price.toLocaleString()} ₽</Typography>
                  </Box>
                  <Button 
                    variant="outlined" 
                    color="error"
                    onClick={() => removeFromCart(product.id)}
                  >
                    Удалить
                  </Button>
                </Box>
              </ListItem>
            ))}
          </List>
          
          <Divider sx={{ my: 2 }} />
          
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h5">
              Итого: {total.toLocaleString()} ₽
            </Typography>
            <Button variant="contained" size="large" color="success">
              Оформить заказ
            </Button>
          </Box>
        </>
      )}
    </Container>
  );
}