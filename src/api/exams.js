import { baseQuery } from "./api";
import Cookies from "js-cookie";

const token = Cookies.get("token");

export const exams = baseQuery.injectEndpoints({
  endpoints: (builder) => ({
    exams: builder.query({
      query: () => ({
        url: `exams/all`,
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useExamsQuery } = exams;
