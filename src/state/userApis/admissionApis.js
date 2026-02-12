import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const admissionApis = createApi({
  reducerPath: "admissionApis",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL || "http://localhost:3000",
    credentials: "include",
  }),
  tagTypes: ["Admission"],
  endpoints: (builder) => ({
    getMyAdmission: builder.query({
      query: () => "api/admissions",
      transformResponse: (response) => (Array.isArray(response) ? response[0] : null),
      providesTags: (result) =>
        result
          ? [
            { type: "Admission", id: result._id },
            { type: "Admission", id: "LIST" },
          ]
          : [{ type: "Admission", id: "LIST" }],
    }),
    join: builder.mutation({
      query: (data) => ({
        url: "api/admission/join",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [{ type: "Admission", id: "LIST" }],
    }),
    update: builder.mutation({
      query: (data) => ({
        url: "api/admission/update",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: (result) =>
        result?.admission?._id
          ? [
            { type: "Admission", id: result.admission._id },
            { type: "Admission", id: "LIST" },
          ]
          : [{ type: "Admission", id: "LIST" }],
    }),
  }),
});

export const { useGetMyAdmissionQuery, useJoinMutation, useUpdateMutation } =
  admissionApis;

export default admissionApis;
