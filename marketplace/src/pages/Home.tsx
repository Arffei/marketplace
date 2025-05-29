import { Container, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <Container maxWidth="lg" sx={{ py: 4, textAlign: 'center' }}>
      <Typography variant="h2" gutterBottom>
        Добро пожаловать в наш маркетплейс!
      </Typography>
      
      <Typography variant="h5" color="textSecondary" paragraph>
        Лучшие товары по выгодным ценам
      </Typography>
      
      <Box sx={{ my: 4 }}>
        <img 
          src="/shopping-banner.jpg" 
          alt="Marketplace" 
          style={{ 
            width: '100%', 
            maxHeight: 400, 
            objectFit: 'cover',
            borderRadius: 16 
          }} 
        />
      </Box>
      
      <Button 
        variant="contained" 
        size="large" 
        component={Link} 
        to="/catalog"
        sx={{ fontSize: '1.2rem', py: 1.5, px: 4 }}
      >
        Перейти к покупкам
      </Button>
    </Container>
  );
}