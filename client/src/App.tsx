import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
import { routes } from '@data/routes';
import './App.css';

const router = createBrowserRouter(routes);

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgba(130, 77, 116, 1)',
      light: 'rgba(255, 255, 255, 1)',
    },
    secondary: {
      main: 'rgba(130, 77, 116, .1)',
    },
  },
  typography: {
    fontFamily: ['Urbanist', 'sans-serif'].join(','),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: 'rgba(91, 53, 81, 1)',
            color: 'rgba(255, 255, 255, 1)',
          },
          '&.logo': {
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 1)',
              color: 'rgba(91, 53, 81, 1)',
            },
          }
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: 'rgba(91, 53, 81, 1)',
            color: 'rgba(255, 255, 255, 1)',
          },
        },
      },
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
