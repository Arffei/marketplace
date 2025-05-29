import { AppBar, Toolbar, Button, IconButton, Box, Badge } from '@mui/material';
import { Home, Favorite, Person, List } from '@mui/icons-material';
import { useFavorites } from '../context/FavoritesContext';
import SearchBar from './SearchBar';
import CartBadge from './CartBadge';

export default function Header() {
  const { favorites } = useFavorites();

  return (
    <AppBar 
      position="static" 
      sx={{ 
        borderRadius: '25px', 
        margin: '0 15%', 
        bgcolor: 'primary.main',
        mt: 2,
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
      }}
    >
      <Toolbar>
        <IconButton href="/" sx={{ mr: 2, color: 'white' }}>
          <Home fontSize="large" />
        </IconButton>
        
        <Button 
          color="inherit" 
          href="/catalog"
          sx={{ fontWeight: 600 }}
        >
          Каталог
        </Button>
        
        <SearchBar />
        
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton href="/profile" sx={{ color: 'white' }}>
            <Person />
          </IconButton>
          
          <IconButton href="/orders" sx={{ color: 'white' }}>
            <List />
          </IconButton>
          
          <IconButton href="/favorites" sx={{ color: 'white' }}>
            <Badge 
              badgeContent={favorites.length} 
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
              <Favorite />
            </Badge>
          </IconButton>
          
          <CartBadge />
        </Box>
      </Toolbar>
    </AppBar>
  );
}