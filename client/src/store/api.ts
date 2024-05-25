import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Ride } from '@pages/Ride';

const BASE_ENDPOINT = 'http://localhost:8888';

// const baseQuery = fetchBaseQuery({
//   baseUrl: `${BASE_ENDPOINT}/api/api-gateway/v1/`,
//   prepareHeaders: (headers) => {
//     headers.set('Content-Type', 'application/json');
//     headers.set('Accept', 'application/json');
//     return headers;
//   },
//   credentials: 'include',
// });

export const ridesApi = createApi({
  reducerPath: 'ridesApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_ENDPOINT }),
  endpoints: (builder) => ({
    getAllDefaultRides: builder.query<Ride[], void>({
      query: () => ({
        url: 'rides',
      }),
    }),
    getAllRides: builder.query<Ride[], void>({
      query: () => ({
        url: 'rides',
      }),
    }),
    getRide: builder.query<Ride, string>({
      query: (rideId) => ({
        url: `/rides/${rideId}`,
      }),
    }),
  }),
});

export const { useGetAllDefaultRidesQuery, useGetAllRidesQuery, useGetRideQuery } = ridesApi;
