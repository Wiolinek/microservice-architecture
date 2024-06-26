import { useState, MouseEvent } from 'react';
import { /*useLocation, */ NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import MapIcon from '@mui/icons-material/Map';
import AddRoadIcon from '@mui/icons-material/AddRoad';
import PersonIcon from '@mui/icons-material/Person';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SettingsIcon from '@mui/icons-material/Settings';

const navLinkStyleDesktop = {
  textDecoration: 'none',
  color: 'primary.main',
  display: 'flex',
  alignItems: 'center',
  width: 136,
};

const CustomMenu = () => {
  // const { pathname } = useLocation();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Toolbar data-testid="menu" sx={{ flexGrow: 1, px: { xs: 0, md: 3 } }}>
      <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
        <IconButton color="primary" aria-label="test" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu}>
          <MenuIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: { xs: 0, md: 2 } }} />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: 'block', md: 'none' },
          }}>
          <MenuItem onClick={handleCloseNavMenu} sx={{ width: '100%' }}>
            <NavLink to={'/'} style={{ textDecoration: 'none', width: '100%' }}>
              {({ isActive }) => (
                <Button variant={isActive ? 'contained' : 'outlined'} size="medium" sx={{ width: '100%', justifyContent: 'flex-start' }}>
                  <MapIcon sx={{ mr: 2 }} />
                  Rides
                </Button>
              )}
            </NavLink>
          </MenuItem>
          <MenuItem onClick={handleCloseNavMenu} sx={{ width: '100%' }}>
            <NavLink to={'/add-ride'} style={{ textDecoration: 'none', width: '100%' }}>
              {({ isActive }) => (
                <Button variant={isActive ? 'contained' : 'outlined'} size="medium" sx={{ width: '100%', justifyContent: 'flex-start' }}>
                  <AddRoadIcon sx={{ mr: 2 }} />
                  Add ride
                </Button>
              )}
            </NavLink>
          </MenuItem>
          <MenuItem onClick={handleCloseNavMenu} sx={{ width: '100%' }}>
            <NavLink to={'/dashboard'} style={{ textDecoration: 'none', width: '100%' }}>
              {({ isActive }) => (
                <Button variant={isActive ? 'contained' : 'outlined'} size="medium" sx={{ width: '100%', justifyContent: 'flex-start' }}>
                  <SettingsIcon sx={{ mr: 2 }} />
                  Dashboard
                </Button>
              )}
            </NavLink>
          </MenuItem>
          <MenuItem onClick={handleCloseNavMenu}>
            <NavLink to={'/login'} style={{ textDecoration: 'none', width: '100%' }}>
              {({ isActive }) => (
                <Button variant={isActive ? 'contained' : 'outlined'} size="medium" sx={{ width: '100%', justifyContent: 'flex-start' }}>
                  <PersonIcon sx={{ mr: 2 }} />
                  LogIn
                </Button>
              )}
            </NavLink>
          </MenuItem>
          <MenuItem onClick={handleCloseNavMenu}>
            <NavLink to={'/register'} style={{ textDecoration: 'none', width: '100%' }}>
              {({ isActive }) => (
                <Button variant={isActive ? 'contained' : 'outlined'} size="medium" sx={{ width: '100%', justifyContent: 'flex-start' }}>
                  <PersonAddIcon sx={{ mr: 2 }} />
                  Register
                </Button>
              )}
            </NavLink>
          </MenuItem>
        </Menu>
      </Box>
      <Box sx={{ flexGrow: 1, justifyContent: 'space-between', display: { xs: 'none', md: 'flex', gap: 16 } }}>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', gap: 16 } }}>
          <NavLink to={'/'} onClick={handleCloseNavMenu} style={navLinkStyleDesktop}>
            {({ isActive }) => (
              <Button sx={{ textDecoration: 'none', width: '100%' }} variant={isActive ? 'contained' : 'outlined'} size="medium">
                <MapIcon sx={{ mr: 1 }} />
                Rides
              </Button>
            )}
          </NavLink>
          <NavLink to={'/add-ride'} onClick={handleCloseNavMenu} style={navLinkStyleDesktop}>
            {({ isActive }) => (
              <Button sx={{ textDecoration: 'none', width: '100%' }} variant={isActive ? 'contained' : 'outlined'} size="medium">
                <AddRoadIcon sx={{ mr: 1 }} />
                Add ride
              </Button>
            )}
          </NavLink>
        </Box>
        <Box sx={{ flexGrow: 1, justifyContent: 'flex-end', display: { xs: 'none', md: 'flex', gap: 16 } }}>
          <NavLink to={'/dashboard'} onClick={handleCloseNavMenu} style={navLinkStyleDesktop}>
            {({ isActive }) => (
              <Button sx={{ textDecoration: 'none', width: '100%' }} variant={isActive ? 'contained' : 'outlined'} size="medium">
                <SettingsIcon sx={{ mr: 1 }} />
                Dashboard
              </Button>
            )}
          </NavLink>
          <NavLink to={'/login'} onClick={handleCloseNavMenu} style={navLinkStyleDesktop}>
            {({ isActive }) => (
              <Button sx={{ textDecoration: 'none', width: '100%' }} variant={isActive ? 'contained' : 'outlined'} size="medium">
                <PersonIcon sx={{ mr: 1 }} />
                LogIn
              </Button>
            )}
          </NavLink>
          <NavLink data-testid="register-button" to={'/register'} onClick={handleCloseNavMenu} style={navLinkStyleDesktop}>
            {({ isActive }) => (
              <Button sx={{ textDecoration: 'none', width: '100%' }} variant={isActive ? 'contained' : 'outlined'} size="medium">
                <PersonAddIcon sx={{ mr: 1 }} />
                Register
              </Button>
            )}
          </NavLink>
        </Box>
      </Box>
    </Toolbar>
  );
};
export default CustomMenu;
