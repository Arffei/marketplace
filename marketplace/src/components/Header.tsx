import { AppBar, Toolbar, Button, IconButton, InputBase, Badge } from '@mui/material';
import { Home, Search, Favorite, ShoppingCart, Person, List } from '@mui/icons-material';
import { useCart } from '../context/CartContext';
import { useFavorites } from '../context/FavoritesContext';

export default function Header() {
  const { cart } = useCart();
  const { favorites } = useFavorites();

  return (
    <AppBar 
      position="static" 
      sx={{ 
        borderRadius: '25px', 
        margin: '0 15%', 
        bgcolor: 'primary.main',
        mt: 2
      }}
    >
      <Toolbar>
        <IconButton href="/" sx={{ mr: 2 }}>
          <Home fontSize="large" />
        </IconButton>
        
        <Button color="inherit" href="/catalog">Каталог</Button>
        
        <InputBase
          placeholder="Поиск..."
          startAdornment={<Search sx={{ mr: 1 }} />}
          sx={{ 
            bgcolor: 'white', 
            borderRadius: '20px', 
            px: 2, 
            mx: 2, 
            flexGrow: 1 
          }}
        />
        
        <IconButton href="/profile"><Person /></IconButton>
        <IconButton href="/orders"><List /></IconButton>
        
        <IconButton href="/favorites">
          <Badge badgeContent={favorites.length} color="error">
            <Favorite />
          </Badge>
        </IconButton>
        
        <IconButton href="/cart">
          <Badge badgeContent={cart.length} color="error">
            <ShoppingCart />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}