import RideCard from '@components/RideCard';
import List from '@mui/material/List';
import Grid from '@mui/material/Grid';

const rides = [
  {
    id: 1,
    start: 'Warszawa',
    destination: 'Kraków',
    startTime: '09:00',
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
    startTime: '14:00',
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
    startTime: '10:00',
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
    startTime: '18:00',
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
    startTime: '06:00',
    endTime: '07:20',
    totalSeats: 2,
    freeSeats: 1,
    price: 10,
    carMake: 'BMW',
    photo: '../../images/5.jpg',
  },
];

const RidesList = () => {
  return (
    <List>
      <Grid container spacing={3} style={{ marginLeft: -24 }}>
        {rides.map((ride) => (
          <RideCard
            key={ride.id}
            start={ride.start}
            destination={ride.destination}
            startTime={ride.startTime}
            endTime={ride.endTime}
            totalSeats={ride.totalSeats}
            freeSeats={ride.freeSeats}
            price={ride.price}
            carMake={ride.carMake}
            photo={ride.photo}></RideCard>
        ))}
      </Grid>
    </List>
  );
};

export default RidesList;
