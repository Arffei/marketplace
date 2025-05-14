import { Card, CardMedia, Button, Typography, Box } from '@mui/material';

export default function BannerProductCard({ image }: { image: string }) {
  return (
    <Card sx={{ 
      position: 'relative',
      height: 200,
      borderRadius: '12px',
      overflow: 'hidden',
      '&:hover .banner-content': {
        opacity: 1
      }
    }}>
      <CardMedia
        component="img"
        height="200"
        image={image}
        sx={{ objectFit: 'cover' }}
      />
      
      <Box className="banner-content" sx={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        bgcolor: 'rgba(0,0,0,0.5)',
        color: 'white',
        p: 2,
        opacity: 0,
        transition: 'opacity 0.3s'
      }}>
        <Typography variant="h6">Специальное предложение</Typography>
        <Button 
          variant="contained" 
          color="secondary" 
          size="small"
          sx={{ mt: 1 }}
        >
          Подробнее
        </Button>
      </Box>
    </Card>
  );
}