// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const UserApi = createApi({
  reducerPath: 'UserApi',
  baseQuery: fetchBaseQuery({ baseUrl: '' }),
  endpoints: (builder) => ({

    signup: builder.mutation({
      query: (id) => ({
        url:`/signup`,
        method:'POST',
        body:id,
      }),
    }),

    login: builder.mutation({
      query: (id) => ({
        url:`/login`,
        method:'POST',
        body:id,
      }),
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { 
  useSignupMutation,
  useLoginMutation,
 } = UserApi
