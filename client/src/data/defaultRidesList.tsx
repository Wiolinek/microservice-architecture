export interface Ride {
  id: number;
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
}

export const defaultRidesList = [
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
    carImage: '../../images/1.jpg',
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
    carImage: '../../images/2.jpg',
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
    carImage: '../../images/3.jpg',
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
    carImage: '../../images/4.jpg',
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
    carImage: '../../images/5.jpg',
  },
];
