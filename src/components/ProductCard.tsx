// components/ProductCard.tsx
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

export default function ProductCard({ product }: { product: any }) {
  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      <CardMedia
        component="img"
        height="140"
        image={product.image}
        alt={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Typography variant="h6" sx={{ mt: 2 }}>
          {product.price} руб.
        </Typography>
        <Button variant="contained" sx={{ mt: 2 }} fullWidth>
          В корзину
        </Button>
      </CardContent>
    </Card>
  );
}