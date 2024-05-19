import { Link } from 'react-router-dom';
import PageWrapper from '@layouts/PageWrapper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Banner from '@layouts/Banner';

const AddRide = () => {
  return (
    <PageWrapper>
      <Stack direction="column" alignItems="center" spacing={6}>
        <Banner subtitle="You need to be logged in to add a ride..." />
      </Stack>
      <Stack direction="row" alignItems="center" justifyContent="flex-start" spacing={6} style={{ marginTop: 48 }}>
        <Link to="/login" style={{ alignSelf: 'self-start' }}>
          <Button variant={'contained'} size="medium" sx={{ color: 'primary.light', backgroundColor: 'primary.main' }}>
            Please, log in here
          </Button>
        </Link>
      </Stack>
    </PageWrapper>
  );
};

export default AddRide;
