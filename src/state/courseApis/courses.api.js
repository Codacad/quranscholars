import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const courseApi = createApi({
    reducerPath: 'courseApi',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_API_URL || "http://localhost:3000",
        // credentials: "include",
    }),
    endpoints: (builder) => ({
        getCourses: builder.query({
            query: () => '/api/courses',
            providesTags: ['Courses']
        })
    }),
})

export const { useGetCoursesQuery } = courseApi

export default courseApi;