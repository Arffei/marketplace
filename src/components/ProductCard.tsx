import { 
  Card, 
  CardContent, 
  CardMedia, 
  Typography, 
  Button, 
  CardActionArea,
  Box
} from '@mui/material';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }: { product: any }) {
  const { addToCart } = useCart();

  return (
    <Card sx={{ 
      maxWidth: 345,
      m: 2,
      transition: 'transform 0.2s',
      borderRadius: '15px',
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
          sx={{ 
            objectFit: 'cover',
            borderTopLeftRadius: '15px',
            borderTopRightRadius: '15px'
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            {product.category}
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h6" color="primary">
              {product.price.toLocaleString()} руб.
            </Typography>
            <Button 
              variant="contained" 
              color="secondary" 
              sx={{ 
                borderRadius: '20px',
                padding: '8px 20px'
              }}
              onClick={(e) => {
                e.stopPropagation();
                addToCart(product.id);
              }}
            >
              Купить
            </Button>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}