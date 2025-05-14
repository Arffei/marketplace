// components/SearchBar.tsx
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar({ onSearch }: { onSearch: (query: string) => void }) {
  return (
    <TextField
      fullWidth
      variant="outlined"
      placeholder="Поиск товаров..."
      onChange={(e) => onSearch(e.target.value)}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      sx={{ mb: 4 }}
    />
  );
}