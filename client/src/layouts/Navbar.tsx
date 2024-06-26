import { NavLink } from 'react-router-dom';
import CustomMenu from '@components/Menu';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import { navigationLogoText } from '@data/constants';

const Navbar = () => {
  return (
    <AppBar
      data-testid="navigation-bar"
      position="fixed"
      sx={{
        zIndex: 2,
        ['&.MuiPaper-root']: { backgroundColor: 'primary.light' },
      }}>
      <Toolbar sx={{ px: { xs: '3rem', md: 3 } }}>
        <CustomMenu />
        <Box display="flex" alignItems="bottom" gap={3} p={1} pr={{ xs: 0, md: 2 }}>
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
                  textAlign: 'start',
                }}>
                {navigationLogoText}
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
