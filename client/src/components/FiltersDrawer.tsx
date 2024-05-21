import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import TuneIcon from '@mui/icons-material/Tune';
import CloseIcon from '@mui/icons-material/Close';
import Divider from '@mui/material/Divider';
import { drawerWidth } from '@data/constants';

const FiltersDrawer = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const drawerList = (
    <Box role="menu" sx={{ width: drawerWidth, px: { xs: 0, sm: 2 } }} onClick={toggleDrawer(false)}>
      <List sx={{ py: 3, px: 2 }}>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="filter 1" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="filter 2" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="filter 3" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="filter 4" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider aria-hidden="true" />
    </Box>
  );

  return (
    <>
      <IconButton
        aria-label="open filters"
        onClick={toggleDrawer(true)}
        sx={{
          display: { xs: pathname.includes('/ride') ? 'none' : 'flex', lg: 'flex' },
          position: 'fixed',
          alignSelf: 'self-start',
          zIndex: 1,
          bgcolor: 'primary.main',
        }}>
        <TuneIcon sx={{ color: 'primary.light' }} />
      </IconButton>
      <Drawer
        onClose={toggleDrawer(false)}
        open={open}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          ['& .MuiDrawer-paper']: { width: drawerWidth, boxSizing: 'border-box', backgroundColor: 'transparent' },
        }}>
        <Toolbar />
        <Toolbar sx={{ bgcolor: 'primary.light', pt: { xs: 0, sm: '3.13rem' } }} style={{ paddingLeft: '3rem' }}>
          <IconButton aria-label="close filters" onClick={toggleDrawer(false)} sx={{ bgcolor: 'primary.main' }}>
            <CloseIcon sx={{ color: 'primary.light' }} />
          </IconButton>
        </Toolbar>
        <Box sx={{ overflow: 'auto', bgcolor: 'primary.light', height: '100%' }}>{drawerList}</Box>
      </Drawer>
    </>
  );
};

export default FiltersDrawer;
