import { baseQuery } from './api';
import Cookies from 'js-cookie';
const token = Cookies.get('token');

export const autApi = baseQuery.injectEndpoints({
  endpoints: (builder) => ({
    positionId: builder.query({
      query: (id) => ({
        url: `/api/Position/${id}`,
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

export const { usePositionIdQuery } = autApi;
