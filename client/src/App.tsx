import { Route, Routes } from 'react-router-dom';
import Home from '@pages/Home';
import AddRide from '@pages/AddRide';
import Inbox from '@pages/Inbox';
import LogIn from '@pages/LogIn';
import Register from '@pages/Register';
import NotFound from '@pages/NotFound';
import Ride from '@pages/Ride';
import Navbar from '@layouts/Navbar';
import Footer from '@layouts/Footer';
import { createTheme, ThemeProvider } from '@mui/material';
import './App.css';


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
    fontFamily: [
      "Urbanist", 'sans-serif'
    ].join(','),
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/add-ride" element={<AddRide />}></Route>
        <Route path="/:rideid" element={<Ride />}></Route>
        <Route path="/inbox" element={<Inbox />}></Route>
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path='*' element={ <NotFound />}></Route>
      </Routes>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
