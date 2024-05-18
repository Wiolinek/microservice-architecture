import { NavLink } from 'react-router-dom';
import CustomMenu from '@components/Menu';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

const Navbar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        [`&.MuiPaper-root`]: { backgroundColor: 'primary.light' },
      }}>
      <Toolbar>
        <CustomMenu />
        <Box display="flex" alignItems="bottom" gap={3} p={1} pr={3}>
          <NavLink to={'/'} style={{ textDecoration: 'none', width: '100%' }}>
            <Button size="medium" className="logo">
              <Typography
                variant="h6"
                component="p"
                sx={{
                  display: { xs: 'none', md: 'flex' },
                  fontWeight: 700,
                  letterSpacing: '.1rem',
                  textTransform: 'uppercase',
                  pr: 1,
                  alignSelf: 'self-end',
                }}>
                Share Your Ride
              </Typography>
              <DirectionsCarIcon fontSize="large" />
            </Button>
          </NavLink>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
