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
import EastIcon from '@mui/icons-material/East';
import PersonIcon from '@mui/icons-material/Person';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PaidIcon from '@mui/icons-material/Paid';

interface RideCardProps {
  start: string;
  destination: string;
  startTime: string;
  endTime: string;
  totalSeats: number;
  freeSeats: number;
  price: number;
  carMake: string;
  photo: string;
}

const typographyStyle = {
  fontWeight: 700,
  letterSpacing: '.1rem',
  textTransform: 'uppercase',
};

const generateSeats = (totalSeats: number, freeSeats: number) => {
  const bookedSeats = totalSeats - freeSeats;
  const icons = [];

  for (let i = 0; i < freeSeats; i++) {
    icons.push(<PersonIcon sx={{ color: 'green' }} />);
  }
  for (let i = 0; i < bookedSeats; i++) {
    icons.push(<PersonIcon sx={{ color: 'grey' }} />);
  }
  return icons;
};

const RideCard = ({ start, destination, totalSeats, startTime, endTime, freeSeats, price, carMake, photo }: RideCardProps) => {
  return (
    <Grid item xs={12} md={6} xl={4}>
      <ListItem disableGutters sx={{ display: 'block'}}>
        <Paper sx={{ p: 2 }}>
          <Stack direction="column" alignItems="center" spacing={2}>
            <Stack direction="row" alignItems="center" spacing={2}>
              <MyLocationIcon />
              <Stack alignItems="center" spacing={2}>
                <Typography variant="h6" component="p" sx={typographyStyle}>
                  {start}
                </Typography>
                <Typography
                  variant="body2"
                  component="p"
                  sx={{
                    fontWeight: 700,
                    letterSpacing: '.1rem',
                    textTransform: 'uppercase',
                  }}>
                  {startTime}
                </Typography>
              </Stack>
              <EastIcon />
              <Stack alignItems="center" spacing={2}>
                <Typography variant="h6" component="p" sx={typographyStyle}>
                  {destination}
                </Typography>
                <Typography variant="body2" component="p" sx={typographyStyle}>
                  {endTime}
                </Typography>
              </Stack>
              <LocationOnIcon />
            </Stack>
            <Divider flexItem orientation="horizontal" sx={{ backgroundColor: 'primary.main', height: 1 }} />
            <ImageList variant="quilted" cols={1} sx={{ width: '100%', height: '300px' }}>
              <ImageListItem sx={{ overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
                <img src={photo} alt={carMake} title={carMake} loading="lazy" />
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
            <Button variant="contained" color="primary" size="medium" sx={{ textDecoration: 'none', width: '100%' }}>
              Book seat
            </Button>
          </Stack>
        </Paper>
      </ListItem>
    </Grid>
  );
};

export default RideCard;
