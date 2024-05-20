import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { drawerWidth } from '@data/constants';

interface DashboardPageWrapperProps {
  children: React.ReactNode;
}

const DashboardPageWrapper = ({ children }: DashboardPageWrapperProps) => {
  return (
    <Stack style={{ width: `calc(100% - ${drawerWidth}px)`, marginLeft: `${drawerWidth}px` }}>
      <Paper sx={{ height: 'max-content', p: 2, color: 'primary.main', backgroundColor: 'primary.light' }}>{children}</Paper>
    </Stack>
  );
};

export default DashboardPageWrapper;
