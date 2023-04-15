import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#9925be',
    },
    secondary: {
      main: '#be4d25',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },

  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: '#441155',

          '&:hover': {
            backgroundColor: 'rgba(85, 34, 85, 0.133)',
            boxShadow:
              'inset 0 0 3px 3px rgba(60, 23, 60, 0.133), 0 0 3px 3px rgba(60, 23, 60, 0.133)',
          },
        },
      },
    },

    MuiLink: {
      styleOverrides: {
        root: {
          color: '#441155',
          textDecoration: 'none',
          fontFamily:
            'apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
          fontWeight: '600',
          fontSize: '1.2rem',
          display: 'inline-block',
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
