import { Box, Typography } from '@mui/material';
import ProductCard from '../components/ProductCard';
import { useFavorites } from '../context/FavoritesContext';
import { products } from '../mockData';

export default function Favorites() {
  const { favorites } = useFavorites();
  const favoriteProducts = products.filter(p => favorites.includes(p.id));

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>Избранное</Typography>
      
      {favoriteProducts.length === 0 ? (
        <Typography>Список избранного пуст</Typography>
      ) : (
        <Box sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 2
        }}>
          {favoriteProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Box>
      )}
    </Box>
  );
}