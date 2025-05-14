import { useState, useEffect } from 'react';
import { Box, IconButton } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = Array.from({ length: 7 }, (_, i) => i + 1);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{
      maxWidth: '1200px',
      margin: '20px auto',
      position: 'relative',
      padding: '0 40px'
    }}>
      <Box sx={{
        display: 'flex',
        overflowX: 'hidden',
        gap: '20px',
        scrollBehavior: 'smooth',
        padding: '10px 0'
      }}>
        {items.map((num, index) => (
          <Box
            key={num}
            sx={{
              flex: '0 0 300px',
              height: '300px',
              borderRadius: '12px',
              overflow: 'hidden',
              opacity: Math.abs(index - activeIndex) > 1 ? 0.5 : 1,
              transition: 'opacity 0.3s, transform 0.3s',
              transform: `translateX(-${activeIndex * 320}px)`
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
          </Box>
        ))}
      </Box>

      <IconButton
        onClick={handlePrev}
        sx={{
          position: 'absolute',
          left: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(255,255,255,0.9)',
          '&:hover': {
            backgroundColor: 'rgba(255,255,255,1)'
          }
        }}
      >
        <NavigateBeforeIcon fontSize="large" />
      </IconButton>

      <IconButton
        onClick={handleNext}
        sx={{
          position: 'absolute',
          right: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(255,255,255,0.9)',
          '&:hover': {
            backgroundColor: 'rgba(255,255,255,1)'
          }
        }}
      >
        <NavigateNextIcon fontSize="large" />
      </IconButton>
    </Box>
  );
}