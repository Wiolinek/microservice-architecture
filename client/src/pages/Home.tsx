import Stack from '@mui/material/Stack';
import PageWrapper from '../components/PageWrapper';
import RidesList from '../components/RidesList';

const Home = () => {
  return (
    <PageWrapper>
      <Stack spacing={2}>
        <RidesList />
      </Stack>
    </PageWrapper>
  );
};

export default Home;
