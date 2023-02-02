import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { headers } from "./../utils/ApiHeaders";

export const leaveBalanceApi = createApi({
  reducerPath: "leaveBalanceApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
  }),
  tagTypes: ["LeaveBalance"],
  endpoints: (builder) => ({
    getLeaveBalanceList: builder.query({
      query: (id) => ({
        url: `admin/leave-setting-list/${id}`,
        method: "GET",
        headers,
      }),
      providesTags: ["LeaveBalance"],
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
      invalidatesTags: ["LeaveBalance"],
    }),


  }),
});

export const {useGetLeaveBalanceListQuery} =
leaveBalanceApi;
