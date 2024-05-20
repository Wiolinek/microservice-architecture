import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import { userMenuItemsList } from '@data/userMenuItemsList';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import { drawerWidth } from '@data/constants';

const userMenuList = userMenuItemsList.map((item) => {
  return (
    <ListItem key={item.title} disablePadding>
      <NavLink to={item.link} style={{ textDecoration: 'none', width: '100%' }}>
        {({ isActive }) => (
          <Button variant={isActive ? 'contained' : 'outlined'} size="medium" sx={{ width: '100%', justifyContent: 'flex-start' }}>
            {item.icon}
            {item.title}
          </Button>
        )}
      </NavLink>
    </ListItem>
  );
});

const DashboardDrawer = () => {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        zIndex: 1,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
        },
      }}
      variant="permanent"
      anchor="left">
      <Toolbar />
      <List sx={{ display: 'flex', flexDirection: 'column', gap: 3, padding: 6 }}>{userMenuList}</List>
      <Divider />
    </Drawer>
  );
};

export default DashboardDrawer;
