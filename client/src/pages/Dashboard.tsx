import { Outlet } from 'react-router-dom';
import PageWrapper from '@layouts/PageWrapper';
import DashboardDrawer from '@components/DashboardDrawer';

const Dashboard = () => {
  return (
    <PageWrapper>
      <DashboardDrawer />
      <Outlet />
    </PageWrapper>
  );
};

export default Dashboard;
