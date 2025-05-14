import { 
  AppBar, 
  Toolbar, 
  IconButton, 
  Badge, 
  Box, 
  Button 
} from '@mui/material';
import { 
  ShoppingCart, 
  AccountCircle, 
  Favorite, 
  Assignment, 
  Menu 
} from '@mui/icons-material';
import { useCart } from '../context/CartContext';
import SearchBar from './SearchBar';

export default function Header() {
  const { cartItems } = useCart();

  return (
    <AppBar 
      position="sticky" 
      sx={{ 
        backgroundColor: '#87CEEB',
        borderRadius: '15px',
        margin: '15px 15%',
        width: '70%'
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <img 
            src="/images/logs.png" 
            alt="Логотип GAZON" 
            style={{ 
              height: '40px', 
              width: 'auto',
              objectFit: 'contain'
            }}
          />
          <Button
            variant="contained"
            startIcon={<Menu />}
            sx={{ 
              borderRadius: '20px',
              backgroundColor: '#1E3A5F',
              '&:hover': { backgroundColor: '#2A4A6E' }
            }}
          >
            Каталог
          </Button>
          <SearchBar />
        </Box>

        <Box sx={{ display: 'flex', gap: 1 }}>
          <IconButton color="inherit" href="/favorites">
            <Badge badgeContent={0} color="error">
              <Favorite />
            </Badge>
          </IconButton>
          <IconButton color="inherit" href="/orders">
            <Assignment />
          </IconButton>
          <IconButton color="inherit" href="/cart">
            <Badge badgeContent={cartItems.length} color="error">
              <ShoppingCart />
            </Badge>
          </IconButton>
          <IconButton color="inherit" href="/profile">
            <AccountCircle />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}