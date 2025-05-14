import { Card, CardMedia } from '@mui/material';

export default function WideProductCard({ image }: { image: string }) {
  return (
    <Card sx={{ 
      width: '100%',
      height: 164,
      borderRadius: '12px',
      overflow: 'hidden',
      transition: 'transform 0.3s',
      '&:hover': {
        transform: 'scale(1.02)'
      }
    }}>
      <CardMedia
        component="img"
        height="164"
        image={image}
        sx={{ objectFit: 'cover' }}
      />
    </Card>
  );
}