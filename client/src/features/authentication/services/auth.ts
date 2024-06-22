import { Response, RegisterPayload, LoginPayload } from '@features/authentication/interfaces/interfaces';
import { authenticationApi } from '@store/api';

export const authApi = authenticationApi.injectEndpoints({
  endpoints: (build) => ({
    register: build.mutation<Response, RegisterPayload>({
      query(body: RegisterPayload) {
        return {
          url: '/register',
          method: 'POST',
          body,
        };
      },
      //   invalidatesTags: ['Auth'],
    }),
    login: build.mutation<Response, LoginPayload>({
      query(body: LoginPayload) {
        return {
          url: 'login',
          method: 'POST',
          body,
        };
      },
      //   invalidatesTags: ['Auth'],
    }),
    logout: build.mutation<Response, void>({
      query() {
        return {
          url: 'logout',
          method: 'POST',
          body: {},
        };
      },
      //   invalidatesTags: ['Auth'],
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation, useLogoutMutation } = authApi;
