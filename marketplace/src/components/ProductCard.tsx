import { Card, CardMedia, CardContent, Button, IconButton, Box } from '@mui/material';
import { Favorite, FavoriteBorder, ShoppingCart } from '@mui/icons-material';
import { useCart } from '../context/CartContext';
import { useFavorites } from '../context/FavoritesContext';

export default function ProductCard({ product }: { product: any }) {
  const { cart, addToCart, removeFromCart } = useCart();
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();
  
  const isInCart = cart.includes(product.id);
  const isFavorite = favorites.includes(product.id);

  return (
    <Card sx={{ maxWidth: 250, m: 2, position: 'relative' }}>
      <CardMedia
        component="img"
        height="140"
        image={product.image}
        alt={product.name}
        sx={{ objectFit: 'contain' }}
      />
      <CardContent>
        <h4>{product.name}</h4>
        <p>{product.price.toLocaleString()} ₽</p>
      </CardContent>
      
      <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 1 }}>
        <Button 
          variant={isInCart ? "outlined" : "contained"}
          size="small"
          onClick={() => isInCart ? removeFromCart(product.id) : addToCart(product.id)}
          startIcon={<ShoppingCart />}
        >
          {isInCart ? "Убрать" : "В корзину"}
        </Button>
        
        <IconButton 
          onClick={() => isFavorite 
            ? removeFromFavorites(product.id) 
            : addToFavorites(product.id)}
        >
          {isFavorite ? <Favorite color="error" /> : <FavoriteBorder />}
        </IconButton>
      </Box>
    </Card>
  );
}