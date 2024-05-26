import { baseQuery } from "./api";

export const exams = baseQuery.injectEndpoints({
  endpoints: (builder) => ({
    exams: builder.query({
      query: () => ({
        url: `exams/all`,
        method: "GET",
      }),
    }),
    eventItems: builder.query({
      query: (examId) => ({
        url: `agent/eventitems`,
        method: "GET",
        params: { examId },
        headers: {
          Accept: "application/json",
        },
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useExamsQuery, useEventItemsQuery } = exams;
