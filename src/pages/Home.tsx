// pages/Home.tsx
import { Box } from '@mui/material';
import ProductCard from '../components/ProductCard';
import products from '../products.json';

export default function Home() {
  return (
    <Box sx={{ 
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      padding: 2,
      gap: 3
    }}>
      {products.products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Box>
  );
}