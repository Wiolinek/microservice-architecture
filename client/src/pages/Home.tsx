import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PageWrapper from '../components/PageWrapper';
import RidesList from '../components/RidesList';

const Home = () => {
  return (
    <PageWrapper>
      <Stack direction="column" alignItems="center" spacing={6}>
        <Box display="flex" flexDirection='column' gap={2}>
          <Typography variant="h4" component="h1" sx={{ fontSize: '4rem', fontWeight: 900 }}>
            Find your perfect ride
          </Typography>
          <Typography variant="h4" component="h2" sx={{ fontWeight: 700, color: 'primary.main' }}>
            for the best price
          </Typography>
        </Box>
        <RidesList />
      </Stack>
    </PageWrapper>
  );
};

export default Home;
