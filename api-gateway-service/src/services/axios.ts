import axios, { AxiosInstance } from 'axios';
import { sign } from 'jsonwebtoken';
import config from '@api-gateway-service/config';

export const axiosService = (baseUrl: string, serviceName: string) => {
  let apiGatewayToken = '';
  if (serviceName) {
    //sign(payload, private key)
    apiGatewayToken = sign({ id: serviceName }, `${config.API_GATEWAY_JWT_TOKEN}`);
  }
  const axiosInstance: AxiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      apiGatewayToken
    },
    withCredentials: true
  });
  return axiosInstance;
};
