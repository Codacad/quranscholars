import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const admissionApis = createApi({
  reducerPath: "admissionApis",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL || "http://localhost:3000",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    getAdmissions: builder.query({
      query: () => "api/admissions",
    }),
    join: builder.mutation({
      query: (data) => ({
        url: "api/admission/join",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetAdmissionsQuery, useJoinMutation } = admissionApis;

export default admissionApis;
