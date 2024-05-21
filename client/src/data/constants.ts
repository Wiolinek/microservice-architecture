import { LoginFormValues, RegisterFormValues, AddRideFormValues } from '@components/form/interfaces';

export const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
export const phoneNumberRegex = /^[0-9]/;

export const loginDefaultValues: LoginFormValues = {
  email: '',
  password: '',
};

export const registerDefaultValues: RegisterFormValues = {
  email: '',
  name: '',
  phone: '',
  password: '',
  repeatPassword: '',
  isDriver: false,
  isPassenger: false,
  carMake: '',
  carImage: '',
};

export const drawerWidth = 350;

export const addRideFormDefaultValues: AddRideFormValues = {
  email: '',
  name: '',
  phone: '',
  carMake: '',
  carImage: '',
  start: '',
  startDate: '',
  startTime: '',
  destination: '',
  endDate: '',
  endTime: '',
  totalSeats: 0,
  freeSeats: 0,
  price: 0,
};
