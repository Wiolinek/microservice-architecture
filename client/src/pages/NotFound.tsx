import { Link } from 'react-router-dom';
import PageWrapper from '@layouts/PageWrapper';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const NotFound = () => {
  return (
    <PageWrapper>
      <Stack direction="column" alignItems="center" spacing={6}>
        <Box display="flex" flexDirection="column" gap={2}>
          <Typography variant="h4" component="h1" sx={{ fontSize: '4rem', fontWeight: 900 }}>
            Page not found
          </Typography>
          <Typography variant="h4" component="h2" sx={{ fontWeight: 700, color: 'primary.main' }}>
            Back to home page <Link to="/">Back</Link>
          </Typography>
        </Box>
      </Stack>
    </PageWrapper>
  );
};

export default NotFound;
