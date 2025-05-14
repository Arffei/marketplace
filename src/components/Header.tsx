import { AppBar, Toolbar, Typography, IconButton, Badge } from '@mui/material';
import { ShoppingCart, AccountCircle } from '@mui/icons-material';

export default function Header() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          StudyMarket
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