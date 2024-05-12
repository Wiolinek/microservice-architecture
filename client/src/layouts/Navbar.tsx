import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import CustomDrawer from '../components/Drawer';

const Navbar = () => {

  return (
    <AppBar position="static">
      <Toolbar variant="dense" sx={{ display: 'flex', justifyContent: "space-between" }}>
        <CustomDrawer />
        <Box display="flex" alignItems="center" gap={4} p={2}>
          <Typography variant="h6" component="p">
            Share Your Ride
          </Typography>
          <FontAwesomeIcon icon={faCar} size="2xl" /*bounce*/ />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
