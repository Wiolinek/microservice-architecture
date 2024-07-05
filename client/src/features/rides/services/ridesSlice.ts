import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Ride } from '@pages/Ride';
import { AddRidePayload, BookRidePayload } from '@interfaces/rides';

const BASE_ENDPOINT = 'http://localhost:4000/api/v1/api-gateway/';

export const ridesApi = createApi({
  reducerPath: 'ridesApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_ENDPOINT }),
  endpoints: (builder) => ({
    getAllRides: builder.query<Ride[], void>({
      query: () => ({
        url: 'rides',
      }),
      // providesTags: ['Rides']
    }),
    getRide: builder.query<Ride, string>({
      query: (rideId: string) => ({
        url: `rides/${rideId}`,
      }),
      // providesTags: ['Rides']
    }),
    addRide: builder.mutation<void, AddRidePayload>({
      query: (body) => {
        return {
          url: 'add-ride',
          method: 'POST',
          body,
        };
      },
      // providesTags: ['Rides']
    }),
    bookRide: builder.mutation<void, BookRidePayload>({
      query: ({ rideId, ...rest }) => {
        return {
          url: `/booking/${rideId}`,
          method: 'PUT',
          body: rest,
        };
      },
      // providesTags: ['Rides']
    }),
  }),
});

export const { useGetAllRidesQuery, useGetRideQuery, useAddRideMutation, useBookRideMutation } = ridesApi;
