// src/pages/Account.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Account = () => {
  return (
    <Box>
      <Header />
      <Box sx={{ p: 6 }}>
        <Typography variant="h4" component="h1">
          Account
        </Typography>
        <Typography variant="body1">
          Your account details will be displayed here.
        </Typography>
      </Box>
      <Footer />
    </Box>
  );
};

export default Account;