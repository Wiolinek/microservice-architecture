import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import CustomDrawer from '../components/Drawer';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import CustomMenu from '../components/Menu';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar variant="dense" sx={{ display: 'flex' }}>
        <CustomDrawer />
        <CustomMenu />
        <Box display="flex" alignItems="center" gap={4} p={1} mr={1} ml={'auto'}>
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
          <DirectionsCarIcon sx={{ mr: 1 }} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
