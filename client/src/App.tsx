import './App.css';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#824D74',
    },
    secondary: {
      main: '#BE7B72',
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
