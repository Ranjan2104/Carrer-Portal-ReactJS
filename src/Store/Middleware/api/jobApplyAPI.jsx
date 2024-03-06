import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const jobApplyAPI = createApi({
  reducerPath: "jobApplyAPI",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
  endpoints: (builder) => ({
    apijobapply: builder.mutation({
      query: (payload) => ({
        url: `/user/applied-quick/job`,
        method: "POST",
        body: payload,
      }),
    }),
  }),
});

export const { useApijobapplyMutation } = jobApplyAPI;
