import { AppBar, Toolbar, Typography, IconButton, Badge } from '@mui/material';
import { ShoppingCart, AccountCircle } from '@mui/icons-material';

export default function Header() {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#2e7d32' }}>
  <Toolbar>
    <Typography variant="h4" sx={{ flexGrow: 1, fontFamily: 'Roboto Condensed', fontWeight: 700 }}>
        GAZON
    </Typography>
        <IconButton color="inherit">
          <Badge badgeContent={3} color="error">
            <ShoppingCart />
          </Badge>
        </IconButton>
        
        <IconButton color="inherit">
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}