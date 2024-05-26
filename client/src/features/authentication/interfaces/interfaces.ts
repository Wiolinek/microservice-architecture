export interface LoginFormValues {
  email: string;
  password: string;
}

export interface RegisterFormValues {
  email: string;
  name: string;
  phone: string;
  password: string;
  repeatPassword: string;
  isDriver: boolean;
  isPassenger: boolean;
  carMake?: string;
  carImage?: string;
}
