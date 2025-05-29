// src/pages/Account.tsx
import React, { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { AuthContext } from '../context/AuthContext';

const Account = () => {
  const { user } = useContext(AuthContext);

  return (
    <Box>
      <Header />
      <Box sx={{ p: 6 }}>
        <Typography variant="h4" component="h1">
          Account
        </Typography>
        {user ? (
          <Typography variant="body1">
            Welcome, {user.name}!
          </Typography>
        ) : (
          <Typography variant="body1">
            Please log in to view your account details.
          </Typography>
        )}
      </Box>
      <Footer />
    </Box>
  );
};

export default Account;