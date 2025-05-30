import { AppBar, Toolbar, Button, IconButton, Box, Badge } from '@mui/material';
import { Home, Favorite, Person, List } from '@mui/icons-material';
import { useFavorites } from '../context/FavoritesContext';
import SearchBar from './SearchBar';
import CartBadge from './CartBadge';
import React from 'react';

export default function Header() {
  const { favorites } = useFavorites();

  return (
    <Box sx={{ 
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      px: '15%',
      mt: 2
    }}>
      <AppBar 
        position="static" 
        sx={{ 
          borderRadius: '25px', 
          width: '100%',
          maxWidth: 1200,
          bgcolor: 'primary.main',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton href="/" sx={{ color: 'white' }}>
              <Home fontSize="large" />
            </IconButton>
            
            <Button 
              color="inherit" 
              href="/catalog"
              sx={{ fontWeight: 600, ml: 2 }}
            >
              Каталог
            </Button>
          </Box>
          
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
    </Box>
  );
}