import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const ApiSlice = createApi({
  reducerPath: 'ApiSlice',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  tagTypes: ['categories', 'transactions'],
  endpoints: (builder) => ({ }),
})