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

export interface AuthUser {
  profilePublicId: string | null;
  createdAt: Date | null;
  email: string | null;
  id: number | null;
  carMake: string | null;
  carImage: string | null;
  updatedAt: Date | null;
  name: string | null;
}

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

export interface ReduxLogout {
  type: string;
  payload: boolean;
}

export interface ReduxAddAuthUser {
  type: string;
  payload: ReduxAuthPayload;
}

export interface ReduxAuthPayload {
  authInfo?: AuthDocument;
}

export interface AuthDocument {
  id?: number;
  profilePublicId?: string;
  email: string;
  name: string;
  phone: string;
  password: string;
  isDriver: boolean;
  isPassenger: boolean;
  carMake?: string;
  carImage?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
