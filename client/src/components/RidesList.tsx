import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import RideCard from '@components/RideCard';
import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import { Ride } from '@pages/Ride';
import { useGetAllDefaultRidesQuery } from '@store/api';

const RidesList = () => {
  const { pathname } = useLocation();
  const [height, setHeight] = useState<number>(100);
  const { data: ridesListData, isError, error, isLoading } = useGetAllDefaultRidesQuery();

  return (
    <Grid data-testid="rides-list" container direction="row" spacing={3} style={{ marginLeft: -24, marginTop: 48 }}>
      <Grid
        item
        sx={{ display: { xs: pathname.includes('/ride/') ? 'none' : 'grid', lg: 'grid' } }}
        xs={12}
        lg={pathname.includes('/ride/') ? 6 : 12}>
        <List
          sx={
            pathname.includes('/ride/')
              ? { maxHeight: `${height}px`, overflow: 'scroll', scrollbarColor: 'rgba(130, 77, 116, 1) white' }
              : { overflow: 'auto' }
          }>
          <Grid container direction={{ xs: 'column', md: pathname.includes('/ride/') ? 'column' : 'row' }} spacing={3}>
            {error && <div>error</div>}
            {isLoading && <div>loading</div>}
            {!isLoading &&
              !isError &&
              ridesListData?.map((ride: Ride) => (
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
                  carImage={ride.carImage}></RideCard>
              ))}
          </Grid>
        </List>
      </Grid>
      <Grid item lg={6} sx={{ display: { xs: 'grid' } }}>
        <Outlet context={setHeight} />
      </Grid>
    </Grid>
  );
};

export default RidesList;
