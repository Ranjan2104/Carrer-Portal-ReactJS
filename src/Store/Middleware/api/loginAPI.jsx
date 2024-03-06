import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const loginAPI = createApi({
  reducerPath: "loginAPI",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
  endpoints: (builder) => ({
    apiLogin: builder.mutation({
      query: (payload) => ({
        url: `/api/carrer/signup`,
        method: "POST",
        body: payload,
      }),
    }),
  }),
});

export const { useApiLoginMutation } = loginAPI;
