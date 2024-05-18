import { useLocation } from 'react-router-dom';
import PageWrapper from '@layouts/PageWrapper';
import CustomDrawer from '@components/Drawer';
import RidesList from '@components/RidesList';
import Banner from '@layouts/Banner';
import Stack from '@mui/material/Stack';

const homeTitle = 'Find your perfect ride';
const homeSubtitle = 'for the best price';
const singleRidePageTitle = 'Book & go...';

const Home = () => {
  const { pathname } = useLocation();
  const isDrawerVisible = pathname === '/' || pathname.includes('/ride');

  return (
    <PageWrapper>
      <Stack direction="column" alignItems="center" spacing={6}>
        {isDrawerVisible && <CustomDrawer />}
        {pathname === '/' && <Banner title={homeTitle} subtitle={homeSubtitle}></Banner>}
        {pathname.includes('/ride') && <Banner title={singleRidePageTitle}></Banner>}
        <RidesList />
      </Stack>
    </PageWrapper>
  );
};

export default Home;
