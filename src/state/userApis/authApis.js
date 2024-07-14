import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const authApi = createApi({
  // reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  endpoints: (builer) => ({
    registerUser: builer.mutation({
      query: (user) => ({
        url: "users/register",
        method: "POST",
        body: user,
        credentials: "include",
      }),
    }),
  }),
});

export const { useRegisterUserMutation } = authApi;

export default authApi;
