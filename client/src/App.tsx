import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
import { routes } from './data/routes';
import './App.css';

const router = createBrowserRouter(routes);

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgba(130, 77, 116, 1)',
    },
    secondary: {
      main: 'rgba(130, 77, 116, .1)',
    },
  },
  typography: {
    fontFamily: ['Urbanist', 'sans-serif'].join(','),
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
