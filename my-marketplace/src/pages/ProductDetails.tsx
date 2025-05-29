// src/pages/ProductDetails.tsx
import React from 'react';
import { Box, Typography, Card, CardMedia, CardContent, Button } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ReviewForm from '../components/ReviewForm';

const ProductDetails = () => {
  return (
    <Box>
      <Header />
      <Box sx={{ p: 6 }}>
        <Typography variant="h4" component="h1">
          Product Details
        </Typography>
        <Card>
          <CardMedia
            component="img"
            height="140"
            image="https://via.placeholder.com/150"
            alt="Product"
          />
          <CardContent>
            <Typography variant="h5" component="h2">
              Product Title
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Price: $100
            </Typography>
          </CardContent>
          <Button variant="contained" color="primary">
            Add to Cart
          </Button>
        </Card>
        <ReviewForm />
      </Box>
      <Footer />
    </Box>
  );
};

export default ProductDetails;