// src/pages/Home.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <Box>
      <Header />
      <Box sx={{ p: 6 }}>
        <Typography variant="h4" component="h1">
          Welcome to My Marketplace
        </Typography>
        <Typography variant="body1">
          Explore our products and start shopping!
        </Typography>
      </Box>
      <Footer />
    </Box>
  );
};

export default Home;