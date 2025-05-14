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
import { Link } from 'react-router-dom';

export default function Header() {
  const { cartItems } = useCart();

  return (
    <AppBar 
      position="sticky" 
      sx={{ 
        backgroundColor: '#87CEEB',
        borderRadius: '15px',
        margin: '15px 15%',
        width: '70%',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Link to="/">
            <Box
              component="img"
              src="/images/logs.png"
              alt="Логотип GAZON"
              sx={{
                height: '40px',
                width: 'auto',
                transition: 'transform 0.2s',
                '&:hover': { 
                  transform: 'scale(1.05)',
                  cursor: 'pointer'
                }
              }}
            />
          </Link>
          
          <Button
            variant="contained"
            startIcon={<Menu />}
            sx={{ 
              borderRadius: '20px',
              backgroundColor: '#1E3A5F',
              '&:hover': { 
                backgroundColor: '#2A4A6E',
                transform: 'translateY(-1px)'
              }
            }}
          >
            Каталог
          </Button>
          
          <SearchBar />
        </Box>

        <Box sx={{ display: 'flex', gap: 1 }}>
          <IconButton 
            color="inherit" 
            href="/favorites"
            sx={{ '&:hover': { transform: 'scale(1.1)' } }}
          >
            <Badge badgeContent={0} color="error">
              <Favorite />
            </Badge>
          </IconButton>
          
          <IconButton 
            color="inherit" 
            href="/orders"
            sx={{ '&:hover': { transform: 'scale(1.1)' } }}
          >
            <Assignment />
          </IconButton>
          
          <IconButton 
            color="inherit" 
            href="/cart"
            sx={{ '&:hover': { transform: 'scale(1.1)' } }}
          >
            <Badge badgeContent={cartItems.length} color="error">
              <ShoppingCart />
            </Badge>
          </IconButton>
          
          <IconButton 
            color="inherit" 
            href="/profile"
            sx={{ '&:hover': { transform: 'scale(1.1)' } }}
          >
            <AccountCircle />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}