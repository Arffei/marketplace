import { Box, Container, Typography } from '@mui/material';
import ProductCard from '../components/ProductCard';
import SaleItem from '../components/SaleItem';
import products from '../products.json';

export default function Home() {
  return (
    <Container maxWidth="xl" sx={{ py: 2 }}>
      {/* Блок спецпредложений */}
      <Box sx={{ 
        backgroundColor: '#e3f2fd',
        borderRadius: '16px',
        p: 3,
        mb: 4
      }}>
        <Typography variant="h5">Специальные предложения</Typography>
        <Box sx={{ 
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 2,
          mt: 2
        }}>
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <SaleItem key={num} number={num} />
          ))}
        </Box>
      </Box>

      {/* Баннер */}
      <Box sx={{ 
        my: 4,
        borderRadius: '16px',
        overflow: 'hidden',
        height: 154,
        backgroundImage: 'url(/images/banner1.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}/>

      {/* Основные товары */}
      <Typography variant="h5">Популярные товары</Typography>
      <Box sx={{ 
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 3,
        mt: 2
      }}>
        {products.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Box>
    </Container>
  );
}