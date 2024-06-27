import axios, { AxiosResponse } from 'axios';
import { axiosService } from '@services/axios';
import config from '@api-gateway-service/config';
import { AddRide } from '@interfaces/api-gateway';

export let axiosAuthInstance: ReturnType<typeof axios.create>;

export const axiosFunction = axiosService(`${config.RIDES_BASE_URL}/api/v1/rides`, 'rides');
axiosAuthInstance = axiosFunction;

export const getRidesFunction = async () => {
  const response: AxiosResponse = await axiosFunction.get('/');
  return response;
};

export const getSingleRideFunction = async (rideId: string) => {
  const response: AxiosResponse = await axiosFunction.get(`/rides/${rideId}`);
  return response;
};

export const addRideFunction = async (body: AddRide) => {
  const response: AxiosResponse = await axiosFunction.post(`/add-ride`);
  return response;
};

export const bookRideFunction = async (rideId: string) => {
  const response: AxiosResponse = await axiosFunction.put(`/booking/${rideId}`);
  return response;
};