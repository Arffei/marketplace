// src/components/ReviewForm.tsx
import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

const ReviewForm = () => {
  const [review, setReview] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Отправка отзыва на сервер
    console.log('Review submitted:', review);
    setReview('');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ p: 6 }}>
      <Typography variant="h5" component="h2">
        Leave a Review
      </Typography>
      <TextField
        id="review"
        label="Review"
        multiline
        rows={4}
        value={review}
        onChange={(e) => setReview(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Submit Review
      </Button>
    </Box>
  );
};

export default ReviewForm;