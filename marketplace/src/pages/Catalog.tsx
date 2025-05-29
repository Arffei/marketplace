import { Grid } from '@mui/material';
import ProductCard from '../components/ProductCard';
import { products } from '../mockData';

export default function Catalog() {
  return (
    <Grid container justifyContent="center" sx={{ p: 3 }}>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Grid>
  );
}