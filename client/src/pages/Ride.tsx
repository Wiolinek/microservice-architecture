import React, { useEffect, useRef } from 'react';
import { Link, useOutletContext, useParams } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PaidIcon from '@mui/icons-material/Paid';

const typographyStyle = {
  fontWeight: 700,
  letterSpacing: '.1rem',
  textTransform: 'uppercase',
};

const Ride = () => {
  const { rideId } = useParams();
  const setHeight: React.Dispatch<React.SetStateAction<number>> = useOutletContext();
  const rideDetails = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (rideDetails.current !== null) {
      setHeight(rideDetails?.current?.clientHeight);
    }
  }, [rideId, setHeight]);

  console.log(rideId);
  return (
    <Paper sx={{ width: '100%', height: 'max-content', p: 2 }} ref={rideDetails}>
      <Stack direction="column" spacing={3}>
        <Link to="/" style={{ alignSelf: 'self-start' }}>
          <Button variant={'contained'} size="medium" sx={{ width: '100%' }}>
            Back to full list
          </Button>
        </Link>
        <Stack direction="column" spacing={3}>
          <Stack direction="row" alignItems="center" spacing={4}>
            <MyLocationIcon />
            <Stack spacing={1}>
              <Typography variant="h6" component="p" sx={typographyStyle}>
                {'24.11.2024'}
              </Typography>
              <Typography variant="body2" component="p" sx={typographyStyle}>
                {'9:00'}
              </Typography>
            </Stack>
            <Typography variant="h6" component="p" sx={typographyStyle}>
              {'Warszawa'}
            </Typography>
          </Stack>
          <Divider />
          <Stack direction="row" alignItems="center" spacing={4}>
            <LocationOnIcon />
            <Stack spacing={1}>
              <Typography variant="h6" component="p" sx={typographyStyle}>
                {'24.11.2024'}
              </Typography>
              <Typography variant="body2" component="p" sx={typographyStyle}>
                {'12:30'}
              </Typography>
            </Stack>
            <Typography variant="h6" component="p" sx={typographyStyle}>
              {'Kraków'}
            </Typography>
          </Stack>
        </Stack>
        <Divider flexItem orientation="horizontal" sx={{ backgroundColor: 'primary.main', height: 1 }} />
        <ImageList variant="quilted" cols={1} sx={{ width: '100%', height: '300px' }}>
          <ImageListItem sx={{ overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
            <img src={'../../images/1.jpg'} alt={'carMake'} title={'carMake'} loading="lazy" />
          </ImageListItem>
        </ImageList>
        <Stack direction="row" justifyContent="space-between" spacing={1} sx={{ width: '100%' }}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography variant="body1" component="p" sx={typographyStyle}>
              Available seats:
            </Typography>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Typography variant="h4" component="p" sx={typographyStyle}>
                {'2'}
              </Typography>
              <Typography variant="h6" component="p" sx={typographyStyle}>
                {'/'}
              </Typography>
              <Typography variant="h6" component="p" sx={typographyStyle}>
                {'4'}
              </Typography>
            </Stack>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1}>
            <PaidIcon />
            <Typography variant="h4" component="p" sx={typographyStyle}>
              {10}
            </Typography>
            <Typography variant="h6" component="p" sx={typographyStyle}>
              {'PLN'}
            </Typography>
          </Stack>
        </Stack>
        <Divider flexItem orientation="horizontal" sx={{ backgroundColor: 'primary.main', height: 1 }} />
        <Stack spacing={1}>
          <Typography
            variant="body1"
            component="p"
            sx={{
              ...typographyStyle,
              display: { xs: 'none', sm: 'flex' },
            }}>
            Important information:
          </Typography>
          <Typography variant="body1" component="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </Stack>
        <Button variant="contained" color="primary" size="medium" sx={{ textDecoration: 'none', width: '100%' }}>
          Book seat
        </Button>
      </Stack>
    </Paper>
  );
};

export default Ride;
