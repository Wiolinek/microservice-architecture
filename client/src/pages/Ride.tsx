import React, { useEffect, useRef } from 'react';
import { Link, useOutletContext, useParams } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Checkbox from '@mui/material/Checkbox';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PaidIcon from '@mui/icons-material/Paid';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { typographyStyle } from '@components/RideCard';
import { useGetRideQuery } from '@features/rides/services/ridesSlice';

export interface Ride {
  id: string;
  driverName?: string;
  start: string;
  destination: string;
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
  totalSeats: number;
  freeSeats: number;
  price: number;
  carMake: string;
  carImage: string;
  description?: string;
}

const Ride = () => {
  const { rideId } = useParams();
  const { data, isError, isLoading } = useGetRideQuery(rideId as string);
  const setHeight: React.Dispatch<React.SetStateAction<number>> = useOutletContext();
  const rideDetails = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (rideDetails.current !== null) {
      setHeight(rideDetails?.current?.clientHeight);
    }
  }, [rideId, setHeight]);

  return (
    <>
      {isLoading && <div>loading</div>}
      {!isLoading && !isError && data && (
        <Paper
          data-testid="single-ride-page"
          sx={{ height: 'max-content', p: 2, color: 'primary.light', backgroundColor: 'primary.main' }}
          ref={rideDetails}>
          <Stack spacing={3}>
            <Stack direction="row" alignItems="center" justifyContent="space-between">
              <Link to="/" style={{ alignSelf: 'self-start' }}>
                <Button variant={'contained'} size="medium" sx={{ color: 'primary.main', backgroundColor: 'primary.light' }}>
                  Back to full list
                </Button>
              </Link>
              <Checkbox
                {...{ inputProps: { 'aria-label': 'Add to favourite' } }}
                sx={{
                  color: 'primary.light',
                  p: 0,
                  ['&.Mui-checked']: { color: 'primary.light' },
                }}
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
              />
            </Stack>
            <Stack spacing={3}>
              <Stack direction="row" alignItems="center" spacing={4}>
                <MyLocationIcon />
                <Stack spacing={1}>
                  <Typography variant="h6" component="p" sx={typographyStyle}>
                    {data.startDate}
                  </Typography>
                  <Typography variant="body2" component="p" sx={typographyStyle}>
                    {data.startTime}
                  </Typography>
                </Stack>
                <Typography variant="h6" component="p" sx={typographyStyle}>
                  {data.start}
                </Typography>
              </Stack>
              <Divider />
              <Stack direction="row" alignItems="center" spacing={4}>
                <LocationOnIcon />
                <Stack spacing={1}>
                  <Typography variant="h6" component="p" sx={typographyStyle}>
                    {data.endDate}
                  </Typography>
                  <Typography variant="body2" component="p" sx={typographyStyle}>
                    {data.endTime}
                  </Typography>
                </Stack>
                <Typography variant="h6" component="p" sx={typographyStyle}>
                  {data.destination}
                </Typography>
              </Stack>
            </Stack>
            <Divider sx={{ backgroundColor: 'primary.light', height: 1 }} />
            <Stack direction="row" alignItems="center" spacing={1}>
              <Typography variant="body1" component="p" sx={typographyStyle}>
                Driver:
              </Typography>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Typography variant="h6" component="p" sx={typographyStyle}>
                  {data.driverName}
                </Typography>
              </Stack>
            </Stack>
            <Divider sx={{ backgroundColor: 'primary.light', height: 1 }} />
            <ImageList variant="quilted" cols={1} sx={{ width: '100%', height: '300px' }}>
              <ImageListItem sx={{ overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
                <img src={data.carImage} alt={'carMake'} title={'carMake'} loading="lazy" />
              </ImageListItem>
            </ImageList>
            <Stack direction="row" justifyContent="space-between" spacing={1}>
              <Stack direction={{ xs: 'column', sm: 'row' }} alignItems="center" spacing={1}>
                <Typography variant="body1" component="p" sx={typographyStyle}>
                  Available seats:
                </Typography>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Typography variant="h4" component="p" sx={typographyStyle}>
                    {data.freeSeats}
                  </Typography>
                  <Typography variant="h6" component="p" sx={typographyStyle}>
                    /
                  </Typography>
                  <Typography variant="h6" component="p" sx={typographyStyle}>
                    {data.totalSeats}
                  </Typography>
                </Stack>
              </Stack>
              <Stack direction={{ xs: 'column', sm: 'row' }} alignItems="center" spacing={1}>
                <PaidIcon />
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Typography variant="h4" component="p" sx={typographyStyle}>
                    {data.price}
                  </Typography>
                  <Typography variant="h6" component="p" sx={typographyStyle}>
                    {'PLN'}
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
            <Divider sx={{ backgroundColor: 'primary.light', height: 1 }} />
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
                {data.description}
              </Typography>
            </Stack>

            <Link to={`/booking/${rideId}`}>
              <Button
                variant="contained"
                color="primary"
                size="medium"
                sx={{ textDecoration: 'none', width: '100%', color: 'primary.main', backgroundColor: 'primary.light' }}>
                Book seat
              </Button>
            </Link>
          </Stack>
        </Paper>
      )}
    </>
  );
};

export default Ride;
