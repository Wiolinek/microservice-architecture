import Stack from '@mui/material/Stack';
import RideCard from '../components/RideCard';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const RidesList = () => {
  return (
    <Stack direction="column" alignItems="center" spacing={3}>
      <Typography variant="h4" component="h1">
        title
      </Typography>
      <Grid container spacing={3} style={{ marginLeft: -24 }}>
        <RideCard></RideCard>
        <RideCard></RideCard>
        <RideCard></RideCard>
        <RideCard></RideCard>
        <RideCard></RideCard>
        <RideCard></RideCard>
      </Grid>
    </Stack>
  );
};

export default RidesList;
