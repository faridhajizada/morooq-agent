import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

export const baseQuery = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://morooq.az/webservice/api/auth/agent",
  }),
  endpoints: () => ({}),
  prepareHeaders: (headers) => {
    const AccessToken = Cookies.get("AccessToken");
    if (AccessToken) {
      headers.set("authorization", `Bearer ${AccessToken}`);
    }
    return headers;
  },
});

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 1 });

export const api = createApi({
  reducerPath: "splitApi",
  baseQuery: baseQueryWithRetry,
  refetchOnMountOrArgChange: true,
  endpoints: () => ({}),
});
