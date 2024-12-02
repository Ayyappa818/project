// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const EmployeeApi = createApi({
  reducerPath: 'EmployeeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4500/' }),
  endpoints: (builder) => ({
    getEmployee: builder.query({
      query: () =>({
        url:`/employees`
      }),
    }),
    getEmployeedetails: builder.query({
        query: (id) => ({
          url:`/employees/${id}`,
        }),
      }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { 
    useGetEmployeeQuery,
    useGetEmployeedetailsQuery,
 } = EmployeeApi