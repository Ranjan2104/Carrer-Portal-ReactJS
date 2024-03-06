import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const resumeUploadAPI = createApi({
  reducerPath: "resumeUploadAPI",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
  endpoints: (builder) => ({
    apiresumeuploadapi: builder.mutation({
      query: (payload) => ({
        url: `/api/carrer/resumeupload`,
        method: "POST",
        body: payload,
      }),
    }),
  }),
});

export const { useApiresumeuploadapiMutation } = resumeUploadAPI;
