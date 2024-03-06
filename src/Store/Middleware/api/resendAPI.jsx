import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const resendOTPAPI = createApi({
  reducerPath: "resendOTPAPI",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
  endpoints: (builder) => ({
    apiresendotp: builder.mutation({
      query: (payload) => ({
        url: `/api/carrer/resendotp`,
        method: "POST",
        body: payload,
      }),
    }),
  }),
});

export const { useApiresendotpMutation } = resendOTPAPI;
