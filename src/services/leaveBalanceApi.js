import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { headers } from "./../utils/ApiHeaders";

export const leaveBalanceApi = createApi({
  reducerPath: "leaveBalanceApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
  }),
  tagTypes: ["LeaveBalance"],
  endpoints: (builder) => ({
    getleaveSettingList: builder.query({
      query: (id) => ({
        url: `admin/leave-setting-list/${id}`,
        method: "GET",
        headers,
      }),
      providesTags: ["LeaveBalance"],
    }),

    leaveSettingSaveOrUpdate: builder.mutation({
      query: (department) => {
        return {
          url: `admin/leave-setting-save-or-update`,
          method: "POST",
          body: department,
          headers,
        };
      },
      invalidatesTags: ["LeaveBalance"],
    }),


  }),
});

export const {useGetleaveSettingListQuery ,useLeaveSettingSaveOrUpdateMutation} =
leaveBalanceApi;
