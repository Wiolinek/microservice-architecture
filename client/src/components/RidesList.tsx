import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import RideCard from '@components/RideCard';
import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import { defaultRidesList, Ride } from '@data/defaultRidesList';

const RidesList = () => {
  const { pathname } = useLocation();
  const [height, setHeight] = useState<number>(100);
  return (
    <Grid container direction="row" spacing={3} style={{ marginLeft: -24, marginTop: 48 }}>
      <Grid item xs={12} md={pathname.includes('/ride/') ? 6 : 12}>
        <List
          sx={
            pathname.includes('/ride/')
              ? { maxHeight: `${height}px`, overflow: 'scroll', scrollbarColor: 'rgba(130, 77, 116, 1) white' }
              : { overflow: 'auto' }
          }>
          <Grid container direction={{ xs: 'column', md: pathname.includes('/ride/') ? 'column' : 'row' }} spacing={3}>
            {defaultRidesList.map((ride: Ride) => (
              <RideCard
                key={ride.id}
                id={ride.id}
                start={ride.start}
                destination={ride.destination}
                startDate={ride.startDate}
                startTime={ride.startTime}
                endDate={ride.endDate}
                endTime={ride.endTime}
                totalSeats={ride.totalSeats}
                freeSeats={ride.freeSeats}
                price={ride.price}
                carMake={ride.carMake}
                photo={ride.photo}></RideCard>
            ))}
          </Grid>
        </List>
      </Grid>
      <Grid item md={6} sx={{ display: { xs: 'none', md: pathname.includes('/ride/') ? 'grid' : 'none' } }}>
        <Outlet context={setHeight} />
      </Grid>
    </Grid>
  );
};

export default RidesList;
