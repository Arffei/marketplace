import { InputBase } from '@mui/material';
import { Search } from '@mui/icons-material';

export default function SearchBar() {
  return (
    <InputBase
      placeholder="Поиск..."
      startAdornment={<Search sx={{ mr: 1 }} />}
      sx={{ 
        bgcolor: 'white', 
        borderRadius: '20px', 
        px: 2, 
        mx: 2, 
        flexGrow: 1,
        '&:focus-within': {
          boxShadow: '0 0 0 2px rgba(0,0,0,0.1)'
        }
      }}
    />
  );
}