// components/SaleItem.tsx
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

export default function SaleItem({ number }: { number: number }) {
  return (
    <Card sx={{ 
      width: 188,
      height: 255,
      m: 1,
      borderRadius: '12px',
      boxShadow: 3,
      transition: 'transform 0.2s',
      '&:hover': {
        transform: 'scale(1.05)'
      }
    }}>
      <CardMedia
        component="img"
        height="140"
        image={`/images/sale${number}.jpg`}
        alt={`Акция ${number}`}
        sx={{ borderTopLeftRadius: '12px', borderTopRightRadius: '12px' }}
      />
      <CardContent sx={{ p: 1.5 }}>
        <Typography variant="body2" fontWeight="bold">
          Спеццена №{number}
        </Typography>
        <Button
          variant="contained"
          size="small"
          sx={{
            mt: 1,
            fontSize: '0.75rem',
            padding: '4px 12px',
            borderRadius: '8px',
            backgroundColor: '#2e7d32',
            '&:hover': { backgroundColor: '#1b5e20' }
          }}
        >
          Купить сейчас
        </Button>
      </CardContent>
    </Card>
  );
}