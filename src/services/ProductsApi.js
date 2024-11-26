import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const ProductsApi = createApi({
  reducerPath: 'ProductsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8500/' }),
  endpoints: (builder) => ({
    getproducts: builder.query({
      query: () =>({
        url:`/products`,
      }),
    }),
    getpitems: builder.query({
      query: (id) =>({
        url:`/products/${id}`,
      }),
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { 
    useGetproductsQuery,
    useGetpitemsQuery,
 } = ProductsApi