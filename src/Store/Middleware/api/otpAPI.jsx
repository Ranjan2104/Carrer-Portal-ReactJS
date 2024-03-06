import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const otpAPI = createApi({
  reducerPath: "otpAPI",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
  endpoints: (builder) => ({
    apiOtp: builder.mutation({
      query: (payload) => ({
        url: `/api/carrer/verifyotp`,
        method: "POST",
        body: payload,
      }),
    }),
  }),
});

export const { useApiOtpMutation } = otpAPI;
