import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const paymentApi = createApi({
    reducerPath: 'paymentApi',
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL || "http://localhost:3000", credentials: 'include' }),
    endpoints: (builder) => ({
        coursePayment: builder.mutation({
            query: (body) => ({
                url: '/api/payment',
                method: 'POST',
                body
            })
        })
    })
})

export const { useCoursePaymentMutation } = paymentApi

export default paymentApi