import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Cookies from 'js-cookie';

export const dashboardAPI = createApi({
  reducerPath: "dashboardAPI",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
  endpoints: (builder) => ({
    apidashboard: builder.mutation({
      query: (payload) => ({
        url: Cookies.get('authToken') ? `/user/dashboard/page-no/${payload.page}` : `/search/page-no/${payload.page}`,
        method: "POST",
        body: payload,
      }),
    }),
  }),
});

export const { useApidashboardMutation } = dashboardAPI;
