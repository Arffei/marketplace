import { Container, Typography } from '@mui/material';

export default function Profile() {
  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>Личный кабинет</Typography>
      <Typography>Раздел в разработке</Typography>
    </Container>
  );
}