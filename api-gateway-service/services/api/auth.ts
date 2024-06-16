import axios, { AxiosResponse } from 'axios';
import { axiosService } from '@services/axios';
import config from '@api-gateway-service/config';
import { Login, Register } from '@interfaces/api-gateway';

export let axiosAuthInstance: ReturnType<typeof axios.create>;

export const axiosFunction = axiosService(`${config.AUTH_BASE_URL}/api/v1/auth`, 'auth');
axiosAuthInstance = axiosFunction;

export const registerFunction = async (body: Register) => {
  const response: AxiosResponse = await axiosFunction.post('/register', body);
  return response;
};

export const loginFunction = async (body: Login) => {
  const response: AxiosResponse = await axiosFunction.post('/login', body);
  return response;
};

export const getRides = async () => {
  const response: AxiosResponse = await axiosFunction.get('/');
  return response;
};

export const getSingleRide = async (rideId: string) => {
  const response: AxiosResponse = await axiosFunction.get(`/rides/${rideId}`);
  return response;
};