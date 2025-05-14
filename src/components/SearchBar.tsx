import { 
  InputBase, 
  IconButton, 
  Paper 
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar() {
  return (
    <Paper
      component="form"
      sx={{ 
        p: '2px 4px', 
        display: 'flex', 
        alignItems: 'center', 
        width: 400,
        borderRadius: '20px'
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Поиск товаров..."
        inputProps={{ 'aria-label': 'search products' }}
      />
      <IconButton type="button" sx={{ p: '10px' }}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}