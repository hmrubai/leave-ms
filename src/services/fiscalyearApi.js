import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { headers } from "./../utils/ApiHeaders";

export const fiscalyearApi = createApi({
  reducerPath: "fiscalyearApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
  }),
  tagTypes: ["Year"],
  endpoints: (builder) => ({
    getFiscalYearList: builder.query({
      query: () => ({
        url: "admin/fiscal-year-list",
        method: "GET",
        headers,
      }),
      providesTags: ["Year"],
    }),
    
    fascalYearSaveOrUpdate: builder.mutation({
      query: (branch) => {
        return {
          url: `admin/fiscal-year-save-or-update`,
          method: "POST",
          body: branch,
          headers,
        };
      },
      invalidatesTags: ["Year"],
    }),
  }),
});

export const { useGetFiscalYearListQuery, useFascalYearSaveOrUpdateMutation } =
fiscalyearApi;
