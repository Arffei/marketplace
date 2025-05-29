// src/pages/Products.tsx
import React from 'react';
import { Box, Grid, Typography, Card, CardMedia, CardContent, Button } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';

const products = [
  {
    id: '1',
    title: 'Product 1',
    price: 100,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: '2',
    title: 'Product 2',
    price: 150,
    image: 'https://via.placeholder.com/150',
  },
];

const Products = () => {
  return (
    <Box>
      <Header />
      <Box sx={{ p: 6 }}>
        <Typography variant="h4" component="h1">
          Products
        </Typography>
        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={product.image}
                  alt={product.title}
                />
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {product.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Price: ${product.price}
                  </Typography>
                </CardContent>
                <Button variant="contained" color="primary">
                  Add to Cart
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Footer />
    </Box>
  );
};

export default Products;