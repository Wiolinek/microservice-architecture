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