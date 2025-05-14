import { useState, useEffect } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = Array.from({ length: 7 }, (_, i) => i + 1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % items.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <Box sx={{ 
      position: 'relative', 
      height: 400, 
      overflow: 'hidden',
      borderRadius: '16px',
      margin: '20px 0',
      boxShadow: 3
    }}>
      {items.map((num, index) => (
        <Box
          key={num}
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            opacity: index === activeIndex ? 1 : 0,
            transition: 'opacity 0.5s',
          }}
        >
          <img 
            src={`/images/imgs${num}.jpg`} 
            alt={`Товар ${num}`} 
            style={{ 
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
          <Typography
            variant="h6"
            sx={{
              position: 'absolute',
              bottom: '20px',
              left: '20px',
              color: 'white',
              backgroundColor: 'rgba(0,0,0,0.5)',
              padding: '8px 16px',
              borderRadius: '8px'
            }}
          >
            Товар #{num}
          </Typography>
        </Box>
      ))}
      
      <IconButton
        sx={{ 
          position: 'absolute', 
          left: 20, 
          top: '50%',
          backgroundColor: 'rgba(255,255,255,0.2)',
          '&:hover': { backgroundColor: 'rgba(255,255,255,0.3)' }
        }}
        onClick={() => setActiveIndex(prev => (prev - 1 + items.length) % items.length)}
      >
        <NavigateBeforeIcon fontSize="large" sx={{ color: 'white' }} />
      </IconButton>
      
      <IconButton
        sx={{ 
          position: 'absolute', 
          right: 20, 
          top: '50%',
          backgroundColor: 'rgba(255,255,255,0.2)',
          '&:hover': { backgroundColor: 'rgba(255,255,255,0.3)' }
        }}
        onClick={() => setActiveIndex(prev => (prev + 1) % items.length)}
      >
        <NavigateNextIcon fontSize="large" sx={{ color: 'white' }} />
      </IconButton>
    </Box>
  );
}