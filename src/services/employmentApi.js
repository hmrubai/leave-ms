import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { headers } from "./../utils/ApiHeaders";

export const employmentApi = createApi({
  reducerPath: "employmentApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
  }),
  tagTypes: ["Employment"],
  endpoints: (builder) => ({
    getEmploymentTypeList: builder.query({
      query: () => ({
        url: "admin/employment-type-list",
        method: "GET",
        headers,
      }),
      providesTags: ["Employment"],
    }),
    
    employmentTypeSaveOrUpdate: builder.mutation({
      query: (branch) => {
        return {
          url: `admin/employment-type-save-or-update`,
          method: "POST",
          body: branch,
          headers,
        };
      },
      invalidatesTags: ["Employment"],
    }),
  }),
});

export const { useGetEmploymentTypeListQuery, useEmploymentTypeSaveOrUpdateMutation } =
employmentApi;
