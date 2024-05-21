import { NavLink } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import EastIcon from '@mui/icons-material/East';
import PersonIcon from '@mui/icons-material/Person';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PaidIcon from '@mui/icons-material/Paid';
import { Ride } from '@data/defaultRidesList';

export const typographyStyle = {
  fontWeight: 700,
  letterSpacing: '.1rem',
  textTransform: 'uppercase',
};

const generateSeats = (totalSeats: number, freeSeats: number) => {
  const bookedSeats = totalSeats - freeSeats;
  const icons = [];

  for (let i = 0; i < freeSeats; i++) {
    icons.push(<PersonIcon key={`${i}-free`} sx={{ color: 'green' }} />);
  }
  for (let i = 0; i < bookedSeats; i++) {
    icons.push(<PersonIcon key={`${i}-booked`} sx={{ color: 'grey' }} />);
  }
  return icons;
};

const RideCard = ({
  id,
  start,
  destination,
  totalSeats,
  startDate,
  startTime,
  endDate,
  endTime,
  freeSeats,
  price,
  carMake,
  carImage,
}: Ride) => {
  return (
    <Grid item xs={12} md={6} xl={4}>
      <ListItem key={id} disablePadding sx={{ display: 'block' }}>
        <Paper sx={{ p: 2 }}>
          <Checkbox
            {...{ inputProps: { 'aria-label': 'Add to favourite' } }}
            sx={{ position: 'absolute', right: 16, p: 0 }}
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite />}
          />
          <Stack direction="column" alignItems={{ xs: 'flex-start', sm: 'center' }} spacing={2} sx={{ paddingTop: { xs: 3, sm: 0 } }}>
            <Stack alignItems={{ xs: 'flex-start', sm: 'center' }} spacing={3} direction={{ xs: 'column', sm: 'row' }}>
              <Stack direction="row" alignItems="center" spacing={2}>
                <MyLocationIcon />
                <Stack alignItems="center" direction={{ xs: 'row', sm: 'column' }} spacing={2}>
                  <Typography variant="h6" component="p" sx={typographyStyle}>
                    {startDate}
                  </Typography>
                  <Typography variant="h6" component="p" sx={typographyStyle}>
                    {start}
                  </Typography>
                  <Typography variant="body2" component="p" sx={{ ...typographyStyle, display: { xs: 'none', sm: 'inline' } }}>
                    {startTime}
                  </Typography>
                </Stack>
              </Stack>
              <EastIcon sx={{ display: { xs: 'none', sm: 'flex' } }} />
              <Stack direction="row" alignItems="center" spacing={2}>
                <LocationOnIcon sx={{ display: { xs: 'flex', sm: 'none' } }} />
                <Stack alignItems="center" direction={{ xs: 'row', sm: 'column' }} spacing={2}>
                  <Typography variant="h6" component="p" sx={typographyStyle}>
                    {endDate}
                  </Typography>
                  <Typography variant="h6" component="p" sx={typographyStyle}>
                    {destination}
                  </Typography>
                  <Typography variant="body2" component="p" sx={{ ...typographyStyle, display: { xs: 'none', sm: 'inline' } }}>
                    {endTime}
                  </Typography>
                </Stack>
                <LocationOnIcon sx={{ display: { xs: 'none', sm: 'flex' } }} />
              </Stack>
            </Stack>
            <Divider flexItem orientation="horizontal" sx={{ backgroundColor: 'primary.main', height: 1 }} />
            <ImageList variant="quilted" cols={1} sx={{ width: '100%', height: { xs: '140px', sm: '220px', md: '300px' } }}>
              <ImageListItem sx={{ overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
                <img src={carImage} alt={carMake} title={carMake} loading="lazy" />
              </ImageListItem>
            </ImageList>
            <Stack direction="row" justifyContent="space-between" spacing={1} sx={{ width: '100%' }}>
              <Box sx={{ display: 'flex', direction: 'row', alignItems: 'center', gap: 1 }}>
                <Typography
                  variant="body1"
                  component="p"
                  sx={{
                    ...typographyStyle,
                    display: { xs: 'none', sm: 'flex' },
                  }}>
                  Available seats:
                </Typography>
                {generateSeats(totalSeats, freeSeats)}
              </Box>
              <Box sx={{ display: 'flex', direction: 'row', alignItems: 'center', gap: 1 }}>
                <PaidIcon />
                <Typography variant="h6" component="p" sx={typographyStyle}>
                  {price} PLN
                </Typography>
              </Box>
            </Stack>
            <NavLink to={`ride/${id}`} style={{ width: '100%' }}>
              {({ isActive }) => (
                <Button
                  variant="contained"
                  disabled={isActive}
                  size="medium"
                  sx={{
                    textDecoration: 'none',
                    width: '100%',
                  }}>
                  {isActive ? <EastIcon /> : 'Check details'}
                </Button>
              )}
            </NavLink>
          </Stack>
        </Paper>
      </ListItem>
    </Grid>
  );
};

export default RideCard;
