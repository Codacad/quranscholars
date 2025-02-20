import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const admissionApis = createApi({
  reducerPath: "admissionApis",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL || "http://localhost:3000",
    credentials: "include",
  }),
  tagTypes: ["Admission"],
  endpoints: (builder) => ({
    getAdmissions: builder.query({
      query: () => "api/admissions",
      providesTags: ["Admission"],
    }),
    join: builder.mutation({
      query: (data) => ({
        url: "api/admission/join",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Admission"],
    }),
    update: builder.mutation({
      query: (data) => ({
        url: "api/admission/update",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Admission"],
    }),
  }),
});

export const { useGetAdmissionsQuery, useJoinMutation, useUpdateMutation } =
  admissionApis;

export default admissionApis;
