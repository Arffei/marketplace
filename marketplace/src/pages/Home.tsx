import { Grid } from '@mui/material';
import ProductCard from '../components/ProductCard';
import products from '../products.json';

export default function Home() {
  return (
    <Grid container spacing={3} sx={{ p: 3 }}>
      {products.products.map((product) => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
}