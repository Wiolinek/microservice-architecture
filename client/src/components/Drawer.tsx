import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material';
import { faBars, faEnvelope, faMapLocationDot, faRoad, faUser, faXmark } from '@fortawesome/free-solid-svg-icons';

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
            <ListItemIcon>
              <FontAwesomeIcon icon={faRoad} size="xl" style={{ color: '6d6875' }}/>
            </ListItemIcon>
            <ListItemText primary="Rides" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <FontAwesomeIcon icon={faMapLocationDot} size="xl" style={{ color: 'b5838d' }}/>
            </ListItemIcon>
            <ListItemText primary="Add ride" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <FontAwesomeIcon icon={faEnvelope} size="xl" style={{ color: 'ffb4a2' }}/>
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <FontAwesomeIcon icon={faUser} size="xl" style={{ color: 'ffcdb2' }}/>
            </ListItemIcon>
            <ListItemText primary="LogIn" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        <FontAwesomeIcon icon={faBars} size="2xl" style={{ color: '#fff' }} />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Toolbar sx={{ bgcolor: 'primary.main' }}>
          <Button onClick={toggleDrawer(false)}>
            <FontAwesomeIcon icon={faXmark} size="2xl" style={{ color: '#fff' }} />
          </Button>
        </Toolbar>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default CustomDrawer;
