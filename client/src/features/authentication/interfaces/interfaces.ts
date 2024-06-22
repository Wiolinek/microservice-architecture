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

export interface AuthUser {}

export interface ReduxAddAuthUser {}

export interface Response {
  name: string;
  isDriver: boolean;
  isPassenger: boolean;
}

export interface RegisterPayload {
  [key: string]: string | null | undefined;
  email: string;
  name: string;
  phone: string;
  password: string;
  repeatPassword: string;
  isDriver: string;
  isPassenger: string;
  carMake?: string;
  carImage?: string;
}

export interface LoginPayload {
  [key: string]: string | null | undefined;
  email: string;
  password: string;
}

export interface AddRidePayload {
  email: string;
  name: string;
  phone: string;
  start: string;
  startDate: Date;
  destination: string;
  endDate: Date;
  totalSeats: number;
  freeSeats: number;
  price: number;
  carMake: string;
  carImage?: string;
}

export interface BookRidePayload {
  rideId: string;
  userId: string;
}
