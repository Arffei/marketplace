import { Badge, IconButton } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { useCart } from '../context/CartContext';

export default function CartBadge() {
  const { cart } = useCart();
  
  return (
    <IconButton href="/cart" sx={{ color: 'inherit' }}>
      <Badge 
        badgeContent={cart.length} 
        color="error"
        sx={{
          '& .MuiBadge-badge': {
            right: -3,
            top: 5,
            border: '2px solid',
            borderColor: 'primary.main'
          }
        }}
      >
        <ShoppingCart />
      </Badge>
    </IconButton>
  );
}