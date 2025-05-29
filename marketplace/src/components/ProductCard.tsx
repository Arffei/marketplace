import { Card, CardMedia, CardContent, Button, IconButton, Box, Typography } from '@mui/material';
import { Favorite, FavoriteBorder, ShoppingCart } from '@mui/icons-material';
import { useCart } from '../context/CartContext';
import { useFavorites } from '../context/FavoritesContext';
import { useState } from 'react';

export default function ProductCard({ product }: { product: any }) {
  const { cart, addToCart, removeFromCart } = useCart();
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();
  
  const isInCart = cart.includes(product.id);
  const isFavorite = favorites.includes(product.id);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Card sx={{ 
      maxWidth: 250, 
      m: 2,
      transition: 'transform 0.3s, box-shadow 0.3s',
      '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
      }
    }}>
      <Box sx={{ 
        height: 180, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        p: 2
      }}>
        <CardMedia
          component="img"
          image={product.image}
          alt={product.name}
          sx={{ 
            objectFit: 'contain',
            height: imageLoaded ? 'auto' : 0,
            opacity: imageLoaded ? 1 : 0,
            transition: 'opacity 0.5s ease-in-out'
          }}
          onLoad={() => setImageLoaded(true)}
        />
        {!imageLoaded && (
          <Box sx={{ 
            width: 120, 
            height: 120, 
            bgcolor: '#f0f0f0', 
            borderRadius: 1 
          }} />
        )}
      </Box>
      
      <CardContent>
        <Typography variant="h6" gutterBottom>{product.name}</Typography>
        <Typography variant="body1" color="text.secondary">
          {product.price.toLocaleString('ru-RU')} ₽
        </Typography>
      </CardContent>
      
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        p: 2 
      }}>
        <Button 
          variant={isInCart ? "outlined" : "contained"}
          size="small"
          onClick={() => isInCart 
            ? removeFromCart(product.id) 
            : addToCart(product.id)}
          startIcon={<ShoppingCart />}
          sx={{ flex: 1, mr: 1 }}
        >
          {isInCart ? "Убрать" : "В корзину"}
        </Button>
        
        <IconButton 
          onClick={() => isFavorite 
            ? removeFromFavorites(product.id) 
            : addToFavorites(product.id)}
          sx={{ 
            border: '1px solid', 
            borderColor: isFavorite ? 'error.main' : 'divider',
            bgcolor: isFavorite ? 'rgba(244, 67, 54, 0.08)' : 'transparent'
          }}
        >
          {isFavorite ? <Favorite color="error" /> : <FavoriteBorder />}
        </IconButton>
      </Box>
    </Card>
  );
}