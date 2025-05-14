import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#1E3A5F',
    },
    secondary: {
      main: '#87CEEB',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial',
    h4: {
      fontWeight: 700,
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        }
      }
    }
  }
});