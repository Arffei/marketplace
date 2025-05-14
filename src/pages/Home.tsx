import { Box, Container, Typography } from '@mui/material';
import WideProductCard from '../components/WideProductCard';
import BannerProductCard from '../components/BannerProductCard';
import SaleItem from '../components/SaleItem'; // Путь зависит от структуры вашего проекта

export default function Home() {
  return (
    <Container maxWidth="xl" sx={{ py: 2 }}>
      {/* Блок спецпредложений */}
      <Box sx={{ 
        backgroundColor: '#e3f2fd',
        borderRadius: '16px',
        p: 3,
        mb: 4
      }}>
        <Typography variant="h5">Специальные предложения</Typography>
        <Box sx={{ 
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 2,
          mt: 2
        }}>
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <SaleItem key={num} number={num} />
          ))}
        </Box>
      </Box>

      {/* Баннер */}
      <Box sx={{ 
        my: 4,
        borderRadius: '16px',
        overflow: 'hidden',
        height: 154,
        backgroundImage: 'url(/images/banner1.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}/>

      {/* Новый блок с 3 широкими карточками */}
      <Box sx={{ mt: 6, mb: 8 }}>
        <Typography variant="h5" gutterBottom>Лучшие предложения</Typography>
        <Box sx={{
          display: 'grid',
          gap: 3,
          gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }
        }}>
          {[1, 2, 3].map((num) => (
            <WideProductCard key={num} image={`/images/img${num}.jpg`} />
          ))}
        </Box>
      </Box>

      {/* Новый блок с 4 баннерами */}
      <Box sx={{ mt: 6 }}>
        <Typography variant="h5" gutterBottom>Рекомендуем для вас</Typography>
        <Box sx={{
          display: 'grid',
          gap: 3,
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }
        }}>
          {[1, 2, 3, 4].map((num) => (
            <BannerProductCard key={num} image={`/images/imgbanner${num}.jpg`} />
          ))}
        </Box>
      </Box>
    </Container>
  );
}