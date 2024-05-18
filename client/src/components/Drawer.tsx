import { useState } from 'react';
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

const CustomDrawer = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 270 }} role="menu" onClick={toggleDrawer(false)}>
      <List sx={{ py: 4, px: 2 }}>
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
    <div>
      <IconButton aria-label="open filters" onClick={toggleDrawer(true)}>
        <TuneIcon sx={{ color: 'primary.main' }} />
      </IconButton>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Toolbar sx={{ bgcolor: 'primary.main' }}>
          <IconButton aria-label="close filters" onClick={toggleDrawer(false)}>
            <CloseIcon sx={{ color: 'primary.light' }} />
          </IconButton>
        </Toolbar>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default CustomDrawer;
