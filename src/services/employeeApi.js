import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const employeeApi = createApi({
  reducerPath: 'employeeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/'
  }),
  tagTypes: ['Employee'],
  endpoints: (builder) => ({
      getEmpoyee: builder.query({
      query: () => ({
        url: 'posts',
        method: 'GET',
     
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      }),
      providesTags: ['Employee']
    }),

  })
});

export const {useGetEmpoyeeQuery} = employeeApi;
