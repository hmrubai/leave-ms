import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { headers } from "./../utils/ApiHeaders";

export const designationApi = createApi({
  reducerPath: "designationApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
  }),
  tagTypes: ["Designation"],
  endpoints: (builder) => ({
    getDesignationList: builder.query({
      query: () => ({
        url: `admin/designation-list`,
        method: "GET",
        headers,
      }),
      providesTags: ["Designation"],
    }),
    DesignationSaveOrUpdate: builder.mutation({
      query: (department) => {
        return {
          url: `admin/designation-save-or-update`,
          method: "POST",
          body: department,
          headers,
        };
      },
      invalidatesTags: ["Designation"],
    }),

    branchListByCompanyId: builder.query({
      query: (id) => ({
        url: `/admin/branch-list-by-company-id/${id}`,
        method: 'GET',
        headers
      }),
      providesTags: ['Designation']
    }),

  }),
});

export const {useGetDesignationListQuery,useDesignationSaveOrUpdateMutation,useBranchListByCompanyIdQuery} =
designationApi;
