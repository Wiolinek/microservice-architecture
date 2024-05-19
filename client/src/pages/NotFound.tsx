import { Link } from 'react-router-dom';
import PageWrapper from '@layouts/PageWrapper';
import Banner from '@layouts/Banner';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const NotFound = () => {
  return (
    <PageWrapper>
      <Stack direction="column" alignItems="center" spacing={6}>
        <Banner title="Page not found" />
      </Stack>
      <Stack direction="row" alignItems="center" justifyContent="flex-start" spacing={6} style={{ marginTop: 48 }}>
        <Link to="/" style={{ alignSelf: 'self-start' }}>
          <Button variant={'contained'} size="medium" sx={{ color: 'primary.light', backgroundColor: 'primary.main' }}>
            Back to home page
          </Button>
        </Link>
      </Stack>
    </PageWrapper>
  );
};

export default NotFound;
