import axios, { AxiosResponse } from 'axios';
import { axiosService } from '@services/axios';
import config from '@api-gateway-service/config';
import { LoginData, RegisterData } from '@interfaces/api-gateway';

export let axiosAuthInstance: ReturnType<typeof axios.create>;

export const axiosFunction = axiosService(`${config.AUTH_BASE_URL}/api/v1/auth`, 'auth');
axiosAuthInstance = axiosFunction;

export const registerFunction = async (body: RegisterData) => {
  const response: AxiosResponse = await axiosFunction.post('/register', body);
  return response;
};

export const loginFunction = async (body: LoginData) => {
  const response: AxiosResponse = await axiosFunction.post('/login', body);
  return response;
};
