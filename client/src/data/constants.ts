import { LoginFormValues, RegisterFormValues } from '@components/form/interfaces';

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
  driver: false,
  passenger: false,
  carMake: '',
  carImage: '',
};
