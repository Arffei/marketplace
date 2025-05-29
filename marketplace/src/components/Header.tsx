import { AppBar, Toolbar, Button, IconButton, InputBase } from '@mui/material';
import { Home, Search, Favorite, ShoppingCart, Person, List } from '@mui/icons-material';

export default function Header() {
  return (
    <AppBar 
      position="static" 
      sx={{ 
        borderRadius: '25px', 
        margin: '0 15%', 
        bgcolor: 'primary.main' 
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
        <IconButton href="/favorites"><Favorite /></IconButton>
        <IconButton href="/cart"><ShoppingCart /></IconButton>
      </Toolbar>
    </AppBar>
  );
}