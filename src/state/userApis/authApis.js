import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const authApi = createApi({
  // reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://www.quranscholar.in" }),
  endpoints: (builer) => ({
    registerUser: builer.mutation({
      query: (user) => ({
        url: "/api/users/register",
        method: "POST",
        body: user,
        credentials: "include",
      }),
    }),
  }),
});

export const { useRegisterUserMutation } = authApi;

export default authApi;
