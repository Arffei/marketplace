// components/Carousel.tsx
import { useState, useEffect } from 'react';
import { Box, IconButton } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default function Carousel({ items }: { items: any[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % items.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <Box sx={{ position: 'relative', height: 400, overflow: 'hidden' }}>
      {items.map((item, index) => (
        <Box
          key={item.id}
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            opacity: index === activeIndex ? 1 : 0,
            transition: 'opacity 0.5s',
          }}
        >
          <img 
            src={item.image} 
            alt={item.name} 
            style={{ 
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </Box>
      ))}
      
      <IconButton
        sx={{ position: 'absolute', left: 20, top: '50%' }}
        onClick={() => setActiveIndex(prev => (prev - 1 + items.length) % items.length)}
      >
        <NavigateBeforeIcon fontSize="large" />
      </IconButton>
      
      <IconButton
        sx={{ position: 'absolute', right: 20, top: '50%' }}
        onClick={() => setActiveIndex(prev => (prev + 1) % items.length)}
      >
        <NavigateNextIcon fontSize="large" />
      </IconButton>
    </Box>
  );
}