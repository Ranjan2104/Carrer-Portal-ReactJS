import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

export const getCategoryApi = createApi({
  reducerPath: "getCategoryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
    prepareHeaders: (headers) => {
        // const token = Cookies.get('authToken');
        const token = '_hjSessionUser_3527615=eyJpZCI6ImQ3YzM4ZTU3LWNlNmYtNWNkZi1iODJiLTU5MTJhNTBiNTg5YyIsImNyZWF0ZWQiOjE2ODc4NTU1NTQyNzcsImV4aXN0aW5nIjp0cnVlfQ==; g_state={"i_l":0}; _ga=GA1.1.1537498497.1708403376; _hjShownFeedbackMessage=true; _hjSession_3527615=eyJpZCI6ImUzYTk5ZGFlLTAxYmItNDliNi1hMDI4LTRjY2UyYTAwMjI5ZiIsImMiOjE3MDk1NDE2NjgyMzYsInMiOjEsInIiOjEsInNiIjowLCJzciI6MCwic2UiOjAsImZzIjowLCJzcCI6MX0=; _secure_ref=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdvbGRlbnBsYWNlNDRAZ21haWwuY29tIiwiaWF0IjoxNzA5NTQ2MjM3LCJleHAiOjE3MTQ3MzAyMzd9.C8Wf7Wpo3nbAxZIp-Z9Kw1cVfIa3HumsswOqN03HR7M; cookiesAccepted=true; _secure_ARJ_=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdvbGRlbnBsYWNlNDRAZ21haWwuY29tIiwiaWF0IjoxNzA5NTQ5OTQ4LCJleHAiOjE3MDk1NTM1NDh9.i9lOwN_0OFHzkC2gGjRhpxS4Jh34SVEgN1QXlb8d1vQ; _ga_WWGF86YTQ4=GS1.1.1709541667.18.1.1709550614.0.0.0'
      if (token) {
        headers.set("Authorization", `${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    allCategoryapi: builder.query({
      query: () => `/all-category`,
    }),
  }),
});

export const { useAllCategoryapiQuery } = getCategoryApi;
