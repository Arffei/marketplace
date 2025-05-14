import { AppBar, Toolbar, Typography, IconButton, Badge } from '@mui/material';
import { ShoppingCart, AccountCircle } from '@mui/icons-material';
import { useCart } from '../context/CartContext';

export default function Header() {
  const { cartItems } = useCart();

  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#2e7d32' }}>
      <Toolbar>
        <Typography 
          variant="h4" 
          sx={{ 
            flexGrow: 1, 
            fontFamily: 'Roboto Condensed', 
            fontWeight: 700 
          }}
        >
          GAZON
        </Typography>
        
        <IconButton color="inherit" href="/cart">
          <Badge badgeContent={cartItems.length} color="error">
            <ShoppingCart />
          </Badge>
        </IconButton>
        
        <IconButton color="inherit" href="/profile">
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}