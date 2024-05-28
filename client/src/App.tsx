import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
import { routes } from '@data/routes';
// import { ridesApi } from './store/api';
import { store, persistor } from './store/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
// import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { enUS } from '@mui/x-date-pickers/locales';
import 'dayjs/locale/en-gb';
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
          },
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
    <LocalizationProvider
      adapterLocale="en-gb"
      dateAdapter={AdapterDayjs}
      localeText={enUS.components.MuiLocalizationProvider.defaultProps.localeText}>
      <Provider store={store}>
        {/* <ApiProvider api={ridesApi}> */}
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
          </ThemeProvider>
        </PersistGate>
        {/* </ApiProvider> */}
      </Provider>
    </LocalizationProvider>
  );
};

export default App;
