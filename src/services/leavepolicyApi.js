import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { headers } from "./../utils/ApiHeaders";

export const leavepolicyApi = createApi({
  reducerPath: "leavepolicyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
  }),
  tagTypes: ["LeavePolicy"],
  endpoints: (builder) => ({
    getLeavePolicyList: builder.query({
      query: () => ({
        url: `admin/leave-policy-list`,
        method: "GET",
        headers,
      }),
      providesTags: ["LeavePolicy"],
    }),

    leavePolicySaveOrUpdate: builder.mutation({
      query: (data) => {
        return {
          url: `/admin/leave-policy-save-or-update`,
          method: "POST",
          body: data,
          headers,
        };
      },
      invalidatesTags: ["LeavePolicy"],
    }),

    branchListByCompanyId: builder.query({
      query: (id) => ({
        url: `/admin/branch-list-by-company-id/${id}`,
        method: 'GET',
        headers
      }),
      providesTags: ['LeavePolicy']
    }),

  }),
});

export const {useGetLeavePolicyListQuery,useLeavePolicySaveOrUpdateMutation,useBranchListByCompanyIdQuery} =
leavepolicyApi;
