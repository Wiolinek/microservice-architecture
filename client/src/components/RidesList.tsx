import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import RideCard from '@components/RideCard';
import List from '@mui/material/List';
import Grid from '@mui/material/Grid';

const rides = [
  {
    id: 1,
    start: 'Warszawa',
    destination: 'Kraków',
    startDate: '24.11.2024',
    startTime: '09:00',
    endDate: '24.11.2024',
    endTime: '12:30',
    totalSeats: 3,
    freeSeats: 1,
    price: 10,
    carMake: 'Skoda',
    photo: '../../images/1.jpg',
  },
  {
    id: 2,
    start: 'Sopot',
    destination: 'Gdańsk',
    startDate: '25.11.2024',
    startTime: '14:00',
    endDate: '25.11.2024',
    endTime: '14:30',
    totalSeats: 2,
    freeSeats: 2,
    price: 10,
    carMake: 'Opel',
    photo: '../../images/2.jpg',
  },
  {
    id: 3,
    start: 'Poznań',
    destination: 'Wrocław',
    startDate: '26.11.2024',
    startTime: '10:00',
    endDate: '26.11.2024',
    endTime: '12:15',
    totalSeats: 2,
    freeSeats: 1,
    price: 10,
    carMake: 'BMW',
    photo: '../../images/3.jpg',
  },
  {
    id: 4,
    start: 'Łódź',
    destination: 'Warszawa',
    startDate: '27.11.2024',
    startTime: '18:00',
    endDate: '27.11.2024',
    endTime: '19:45',
    totalSeats: 3,
    freeSeats: 2,
    price: 10,
    carMake: 'Mercedes',
    photo: '../../images/4.jpg',
  },
  {
    id: 5,
    start: 'Katowice',
    destination: 'Opole',
    startDate: '25.11.2024',
    startTime: '06:00',
    endDate: '25.11.2024',
    endTime: '07:20',
    totalSeats: 2,
    freeSeats: 1,
    price: 10,
    carMake: 'BMW',
    photo: '../../images/5.jpg',
  },
];

const RidesList = () => {
  const { pathname } = useLocation();
  const [height, setHeight] = useState<number>(100);
  return (
    <Grid container direction="row" spacing={3} style={{ marginLeft: pathname.includes('/ride/') ? 0 : -24 }}>
      <Grid item xs={12} md={pathname.includes('/ride/') ? 6 : 12}>
        <List
          sx={
            pathname.includes('/ride/')
              ? { maxHeight: `${height}px`, overflow: 'scroll', scrollbarColor: 'rgba(130, 77, 116, 1) white' }
              : { overflow: 'auto' }
          }>
          <Grid container direction={{ xs: 'column', md: pathname.includes('/ride/') ? 'column' : 'row' }} spacing={3}>
            {rides.map((ride) => (
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
