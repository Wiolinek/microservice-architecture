import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  LoginFormValues,
  RegisterFormValues,
  Response,
  RegisterPayload,
  LoginPayload,
} from '@features/authentication/interfaces/interfaces';

const BASE_ENDPOINT = 'http://localhost:4000';

const baseQuery = fetchBaseQuery({
  baseUrl: `${BASE_ENDPOINT}/api/v1/api-gateway/`,
  prepareHeaders: (headers) => {
    headers.set('Content-Type', 'application/json');
    headers.set('Accept', 'application/json');
    return headers;
  },
  credentials: 'include',
});

export const authenticationApi = createApi({
  reducerPath: 'authenticationApi',
  baseQuery,
  endpoints: (builder) => ({
    register: builder.mutation<Response, RegisterPayload>({
      query: (body: RegisterFormValues) => {
        return {
          url: 'register',
          method: 'POST',
          body,
        };
      },
      // invalidatesTags: ['Auth']
    }),
    login: builder.mutation<Response, LoginPayload>({
      query: (body: LoginFormValues) => {
        return {
          url: 'login',
          method: 'POST',
          body,
        };
      },
      // invalidatesTags: ['Auth']
    }),
    logout: builder.mutation<Response, void>({
      query() {
        return {
          url: 'logout',
          method: 'POST',
          body: {},
        };
      },
      // invalidatesTags: ['Auth']
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation, useLogoutMutation } = authenticationApi;
