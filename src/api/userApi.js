import { baseQuery } from './api';
import Cookies from 'js-cookie';
const token = Cookies.get('token');



export const UserApi = baseQuery.injectEndpoints({
  endpoints: (builder) => ({
    readAll: builder.query({
      query: () => '/User/users/readall',
      providesTags: ['User'],
    }),

    user: builder.query({
      query: () => ({
        url: `/User/userinfo`,
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        invalidatesTags: ['User'],
      }),
    }),
    createUser: builder.mutation({
      query: (newData) => ({
        url: `/User/register`,
        method: 'POST',
        body: newData,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
      invalidatesTags: ['User'],
    }),
  }),
  overrideExisting: false,
});

export const { useReadAllQuery, useUserQuery, useCreateUserMutation } = UserApi;
