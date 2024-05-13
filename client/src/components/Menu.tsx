import { useState, MouseEvent } from 'react';
// import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import MapIcon from '@mui/icons-material/Map';
import AddRoadIcon from '@mui/icons-material/AddRoad';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';

const CustomMenu = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    // <AppBar position="static">
    //   <Container maxWidth="xl">
    <Toolbar sx={{ ml: 2 }}>
      <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
        <IconButton size="large" aria-label="test" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu}>
          <MenuIcon sx={{ display: { xs: 'flex', md: 'none', color: '#fff' }, mr: 2 }} />
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
          <MenuItem onClick={handleCloseNavMenu}>
            <MapIcon sx={{ display: { xs: 'flex', md: 'none', color: '6d6875' }, mr: 2 }} />
            <Typography textAlign="center">Rides</Typography>
          </MenuItem>
          <MenuItem onClick={handleCloseNavMenu}>
            <AddRoadIcon sx={{ display: { xs: 'flex', md: 'none', color: 'b5838d' }, mr: 2 }} />
            <Typography textAlign="center">Add ride</Typography>
          </MenuItem>
          <MenuItem onClick={handleCloseNavMenu}>
            <EmailIcon sx={{ display: { xs: 'flex', md: 'none', color: 'ffb4a2' }, mr: 2 }} />
            <Typography textAlign="center">Inbox</Typography>
          </MenuItem>
          <MenuItem onClick={handleCloseNavMenu}>
            <PersonIcon sx={{ display: { xs: 'flex', md: 'none', color: 'ffcdb2' }, mr: 2 }} />
            <Typography textAlign="center">LogIn</Typography>
          </MenuItem>
        </Menu>
      </Box>
      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', gap: 16 } }}>
        <Button onClick={handleCloseNavMenu} sx={{ my: 1, color: '#fff', display: 'flex', alignItems: 'center' }}>
          <MapIcon sx={{ mr: 1 }} />
          Rides
        </Button>
        <Button onClick={handleCloseNavMenu} sx={{ my: 1, color: '#fff', display: 'flex', alignItems: 'center'  }}>
          <AddRoadIcon sx={{ mr: 1 }} />
          Add ride
        </Button>
        <Button onClick={handleCloseNavMenu} sx={{ my: 1, color: '#fff', display: 'flex', alignItems: 'center'  }}>
          <EmailIcon sx={{ mr: 1 }} />
          Inbox
        </Button>
        <Button onClick={handleCloseNavMenu} sx={{ my: 1, color: '#fff', display: 'flex', alignItems: 'center'  }}>
          <PersonIcon sx={{ mr: 1 }} />
          LogIn
        </Button>
      </Box>
    </Toolbar>
    //     </Container>
    //   </AppBar>
  );
};
export default CustomMenu;
