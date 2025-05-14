// components/ProductCard.tsx
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }: { product: any }) {
  const { addToCart } = useCart();
  
  return (
    <Card sx={{ 
      maxWidth: 345,
      m: 2,
      transition: 'transform 0.2s',
      '&:hover': { transform: 'scale(1.03)' }
    }}>
      <CardActionArea onClick={() => addToCart(product.id)}>
        <CardMedia
          component="img"
          height="200"
          image={product.image}
          alt={product.name}
          sx={{ objectFit: 'cover' }}
        />
        {/* ... остальной контент ... */}
      </CardActionArea>
    </Card>
  );
}