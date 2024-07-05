import { AddRideFormValues } from '@interfaces/rides';
import { LoginFormValues, RegisterFormValues } from '@interfaces/auth';

export const navigationLogoText = 'Share Your Ride';

export const EMAIL_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
export const PHONE_NUMBER_REGEX = /^[0-9]/;
export const MAX_FILE_SIZE = 5000000;
export const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];

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
  startDate: new Date(),
  destination: '',
  endDate: new Date(),
  totalSeats: '',
  freeSeats: '',
  price: '',
};
