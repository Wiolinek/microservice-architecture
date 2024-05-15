import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CustomDrawer from '../components/Drawer';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import CustomMenu from '../components/Menu';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar variant="dense" sx={{ display: 'flex', backgroundColor: '#fff', color: 'primary.main' }}>
        <CustomDrawer />
        <CustomMenu />
        <Box display="flex" alignItems="center" gap={3} p={1}>
          <Typography
            variant="body1"
            component="p"
            sx={{
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              textTransform: 'uppercase',
            }}>
            Share Your Ride
          </Typography>
          <DirectionsCarIcon />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
