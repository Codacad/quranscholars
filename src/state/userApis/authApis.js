import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const authApi = createApi({
  // reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://www.quranscholar.in/api/users" }),
  endpoints: (builer) => ({
    registerUser: builer.mutation({
      query: (user) => ({
        url: "register",
        method: "POST",
        body: user,
        credentials:"include"
      }),
    }),
  }),
});

export const { useRegisterUserMutation } = authApi;

export default authApi;
