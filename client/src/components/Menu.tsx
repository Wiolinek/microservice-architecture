import { useState, MouseEvent } from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import MapIcon from '@mui/icons-material/Map';
import AddRoadIcon from '@mui/icons-material/AddRoad';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import { NavLink } from 'react-router-dom';

const navLinkStyleDesktop = {
  textDecoration: 'none',
  color: 'primary.main',
  display: 'flex',
  alignItems: 'center',
  width: 136,
};

const CustomMenu = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Toolbar sx={{ ml: { xs: 'auto', md: 0 }, mr: { xs: 0, md: 'auto' } }}>
      <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
        <IconButton
          size="large"
          color="primary"
          aria-label="test"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}>
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
                <Button variant={isActive ? 'contained' : 'outlined'} size="medium" sx={{ width: '100%' }}>
                  <MapIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 2 }} />
                  Rides
                </Button>
              )}
            </NavLink>
          </MenuItem>
          <MenuItem onClick={handleCloseNavMenu} sx={{ width: '100%' }}>
            <NavLink to={'/add-ride'} style={{ textDecoration: 'none', width: '100%' }}>
              {({ isActive }) => (
                <Button variant={isActive ? 'contained' : 'outlined'} size="medium" sx={{ width: '100%' }}>
                  <AddRoadIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 2 }} />
                  Add ride
                </Button>
              )}
            </NavLink>
          </MenuItem>
          <MenuItem onClick={handleCloseNavMenu} sx={{ width: '100%' }}>
            <NavLink to={'/inbox'} style={{ textDecoration: 'none', width: '100%' }}>
              {({ isActive }) => (
                <Button variant={isActive ? 'contained' : 'outlined'} size="medium" sx={{ width: '100%' }}>
                  <EmailIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 2 }} />
                  Inbox
                </Button>
              )}
            </NavLink>
          </MenuItem>
          <MenuItem onClick={handleCloseNavMenu}>
            <NavLink to={'/login'} style={{ textDecoration: 'none', width: '100%' }}>
              {({ isActive }) => (
                <Button variant={isActive ? 'contained' : 'outlined'} size="medium" sx={{ width: '100%' }}>
                  <PersonIcon sx={{ display: { xs: 'inline-flex', md: 'none' }, mr: 2 }} />
                  LogIn
                </Button>
              )}
            </NavLink>
          </MenuItem>
        </Menu>
      </Box>
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
        <NavLink to={'/inbox'} onClick={handleCloseNavMenu} style={navLinkStyleDesktop}>
          {({ isActive }) => (
            <Button sx={{ textDecoration: 'none', width: '100%' }} variant={isActive ? 'contained' : 'outlined'} size="medium">
              <EmailIcon sx={{ mr: 1 }} />
              Inbox
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
      </Box>
    </Toolbar>
  );
};
export default CustomMenu;