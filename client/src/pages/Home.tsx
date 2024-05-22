import { useLocation } from 'react-router-dom';
import PageWrapper from '@layouts/PageWrapper';
import FiltersDrawer from '@components/FiltersDrawer';
import RidesList from '@components/RidesList';
import Banner from '@layouts/Banner';

export const homeTitle = 'Find your perfect ride';
const homeSubtitle = 'for the best price';
const singleRidePageTitle = 'Book & go...';

const Home = () => {
  const { pathname } = useLocation();
  const isDrawerVisible = pathname === '/' || pathname.includes('/ride');

  return (
    <PageWrapper data-testid="home-page">
      {isDrawerVisible && <FiltersDrawer data-testid="filters-drawer" />}
      {pathname === '/' && <Banner data-testid="home-page1" title={homeTitle} subtitle={homeSubtitle}></Banner>}
      {pathname.includes('/ride') && <Banner title={singleRidePageTitle}></Banner>}
      <RidesList data-testid="home-page-rides" />
    </PageWrapper>
  );
};

export default Home;
