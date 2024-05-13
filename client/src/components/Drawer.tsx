import { useState } from 'react';
import { Button, Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemText, Toolbar } from '@mui/material';
import TuneIcon from '@mui/icons-material/Tune';
import CloseIcon from '@mui/icons-material/Close';

const CustomDrawer = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 270 }} role="menu" onClick={toggleDrawer(false)}>
      <List sx={{ py: 4, px: 3 }}>
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
      <Divider />
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        <TuneIcon sx={{ mr: 1, color: '#fff' }} />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Toolbar sx={{ bgcolor: 'primary.main' }}>
          <Button onClick={toggleDrawer(false)}>
            <CloseIcon sx={{ mr: 1, color: '#fff' }} />
          </Button>
        </Toolbar>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default CustomDrawer;
