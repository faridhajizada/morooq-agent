import { baseQuery } from './api';
import Cookies from 'js-cookie';
const token = Cookies.get('token');

export const autApi = baseQuery.injectEndpoints({
  endpoints: (builder) => ({
    departmentId: builder.query({
      query: (id) => ({
        url: `/api/Department/${id}`,
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        providesTags: ['User'],
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useDepartmentIdQuery } = autApi;
