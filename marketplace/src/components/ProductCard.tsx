import { Card, CardMedia, CardContent, Button, IconButton } from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';

export default function ProductCard({ product }: { product: any }) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <Card sx={{ maxWidth: 250, m: 1 }}>
      <CardMedia
        component="img"
        height="140"
        image={product.image}
        alt={product.name}
      />
      <CardContent>
        <h4>{product.name}</h4>
        <p>{product.price} ₽</p>
      </CardContent>
      <Button size="small">В корзину</Button>
      <IconButton onClick={() => setIsFavorite(!isFavorite)}>
        {isFavorite ? <Favorite color="error" /> : <FavoriteBorder />}
      </IconButton>
    </Card>
  );
}