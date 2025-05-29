import { Container, Typography } from '@mui/material';

export default function Orders() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>Мои заказы</Typography>
      <Typography>История заказов появится здесь</Typography>
    </Container>
  );
}