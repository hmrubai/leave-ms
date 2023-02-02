import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { headers } from "./../utils/ApiHeaders";

export const departmentApi = createApi({
  reducerPath: "departmentApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
  }),
  tagTypes: ["Department"],
  endpoints: (builder) => ({
    getdepartmentList: builder.query({
      query: () => ({
        url: `admin/department-list`,
        method: "GET",
        headers,
      }),
      providesTags: ["Department"],
    }),
    departmentSaveOrUpdate: builder.mutation({
      query: (department) => {
        return {
          url: `admin/department-save-or-update`,
          method: "POST",
          body: department,
          headers,
        };
      },
      invalidatesTags: ["Department"],
    }),

    branchListByCompanyId: builder.query({
      query: (id) => ({
        url: `/admin/branch-list-by-company-id/${id}`,
        method: 'GET',
        headers
      }),
      providesTags: ['Department']
    }),

  }),
});

export const {useGetdepartmentListQuery,useDepartmentSaveOrUpdateMutation,useBranchListByCompanyIdQuery} =
departmentApi;
