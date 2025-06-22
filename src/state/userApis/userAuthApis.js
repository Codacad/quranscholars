import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const userAuthApi = createApi({
  reducerPath: "userAuthApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL || "http://localhost:3000",
    credentials: "include",
  }),

  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: "api/auth/register",
        method: "POST",
        body: data,
      }),
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "api/auth/login",
        method: "POST",
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "api/auth/logout",
        method: "POST",
      }),
    }),
    deleteProfile: builder.mutation({
      query: (body) => ({
        url: "api/auth/delete_profile",
        method: 'POST',
        body: body
      })
    })
  }),
});

export const { useRegisterMutation, useLoginMutation, useLogoutMutation, useDeleteProfileMutation } =
  userAuthApi;

export default userAuthApi;
