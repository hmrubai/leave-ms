import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { headers } from "./../utils/ApiHeaders";

export const leaveApprovalFlowApi = createApi({
  reducerPath: "leaveApprovalFlowApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
  }),
  tagTypes: ["Leave Approval Flow"],
  endpoints: (builder) => ({
    getEmployeeFilterList: builder.query({
      query: (arg) => {
        const { company_id, branch_id, department_id, designation_id } = arg;
        return {
          url: `admin/employee-filter-list`,
          method: "GET",
          headers,
          params: { company_id, branch_id, department_id, designation_id },
        };
      },
      providesTags: ["Leave ApprovalFlow"],
    }),

    addApprovalFlow: builder.mutation({
      query: (Flow) => {
        return {
          url: `admin/add-approval-flow`,
          method: "POST",
          body: Flow,
          headers,
        };
      },
      invalidatesTags: ["Leave ApprovalFlow"],
    }),

    updateApprovalFlow: builder.mutation({
      query: (Flow) => {
        return {
          url: `/admin/update-approval-flow`,
          method: "POST",
          body: Flow,
          headers,
        };
      },
      invalidatesTags: ["Leave ApprovalFlow"],
    }),

    getApprovalFlowList: builder.query({
      query: (empId) => ({
        url:`admin/approval-flow-list?employee_id=${empId}`,
        method: "GET",
        headers,
      }),
      providesTags: ["Leave ApprovalFlow"],
    }),
  }),
});

export const {
  useGetEmployeeFilterListQuery,
  useAddApprovalFlowMutation,
  useGetApprovalFlowListQuery,
  useUpdateApprovalFlowMutation,
} = leaveApprovalFlowApi;
