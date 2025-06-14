import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const fileUploadApi = createApi({
    reducerPath: 'fileUploadApi',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_API_URL || "http://localhost:3000",
        credentials: 'include'
    }),
    tagTypes: ['uploadFiles'],
    endpoints: (builder) => ({
        uploadProfilePicture: builder.mutation({
            query: (file) => ({
                url: 'api/upload/profile_picture',
                method: "POST",
                body: file
            }),
            invalidatesTags: ['uploadFiles']
        }),
        getProfilePicutreUrl: builder.query({
            query: () => ({
                url: 'api/upload/profile_picture_url'
            }),
            providesTags:['uploadFiles']
        })

    })
})

export const { useUploadProfilePictureMutation, useGetProfilePicutreUrlQuery } = fileUploadApi
export default fileUploadApi