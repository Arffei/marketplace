import { Card, CardContent, CardMedia, Typography, Button, CardActionArea } from '@mui/material';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }: { product: any }) {
  const { addToCart } = useCart();

  return (
    <Card sx={{ 
      maxWidth: 345,
      m: 2,
      transition: 'transform 0.2s',
      '&:hover': { 
        transform: 'scale(1.03)',
        boxShadow: 4
      }
    }}>
      <CardActionArea onClick={() => addToCart(product.id)}>
        <CardMedia
          component="img"
          height="200"
          image={product.image}
          alt={product.name}
          sx={{ objectFit: 'cover' }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            {product.category}
          </Typography>
          <Typography variant="h6" color="primary">
            {product.price.toLocaleString()} руб.
          </Typography>
          <Button 
            variant="contained" 
            color="secondary" 
            sx={{ mt: 2, width: '100%' }}
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product.id);
            }}
          >
            В корзину
          </Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}