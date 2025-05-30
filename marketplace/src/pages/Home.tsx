import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { products } from '../mockData';
import { useState, useEffect } from 'react';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesCount = Math.ceil(products.length / 6);
  const slideProducts = products.slice(currentSlide * 6, (currentSlide + 1) * 6);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesCount);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [slidesCount]);

  return (
    <Box sx={{ width: '100%' }}>
      {/* Карусель товаров */}
      <Box sx={{ 
        width: '70%',
        maxWidth: 1200,
        mx: 'auto',
        mt: 4,
        height: 350,
        borderRadius: '25px',
        backgroundColor: 'background.paper',
        boxShadow: 3,
        p: 3,
        mb: 4
      }}>
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridTemplateRows: 'repeat(2, 1fr)',
          gap: 2,
          height: '100%'
        }}>
          {slideProducts.map(product => (
            <Box 
              key={product.id} 
              sx={{ 
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid #e0e0e0',
                borderRadius: '16px',
                p: 1,
                bgcolor: 'white',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
                }
              }}
            >
              <img 
                src={product.image} 
                alt={product.name} 
                style={{ 
                  width: 188, 
                  height: 250, 
                  objectFit: 'cover',
                  borderRadius: '8px'
                }} 
              />
            </Box>
          ))}
        </Box>
        
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          {Array.from({ length: slidesCount }).map((_, index) => (
            <Box
              key={index}
              onClick={() => setCurrentSlide(index)}
              sx={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                bgcolor: currentSlide === index ? 'primary.main' : 'grey.300',
                mx: 0.5,
                cursor: 'pointer',
                transition: 'background-color 0.3s'
              }}
            />
          ))}
        </Box>
      </Box>
      
      <Box sx={{ 
        width: '70%',
        maxWidth: 1200,
        mx: 'auto',
        textAlign: 'center',
        mt: 4
      }}>
        <Button 
          variant="contained" 
          size="large" 
          component={Link} 
          to="/catalog"
          sx={{ 
            fontSize: '1.2rem', 
            py: 1.5, 
            px: 6,
            borderRadius: '12px'
          }}
        >
          Перейти к покупкам
        </Button>
      </Box>
    </Box>
  );
}