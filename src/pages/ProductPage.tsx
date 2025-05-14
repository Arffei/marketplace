import { useParams } from 'react-router-dom';
import { Typography } from '@mui/material';

// Минимальная реализация
const ProductPage = () => {
  const { id } = useParams();
  return (
    <div>
      <Typography variant="h4">Страница товара {id}</Typography>
    </div>
  );
};

export default ProductPage; // Добавляем экспорт