import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { headers } from "./../utils/ApiHeaders";

export const leaveApplicationApi = createApi({
  reducerPath: "leaveApplicationApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
  }),
  tagTypes: ["LeaveApplication"],
  endpoints: (builder) => ({
    // getleaveSettingList: builder.query({
    //   query: (id) => ({
    //     url: `admin/leave-setting-list/${id}`,
    //     method: "GET",
    //     headers,
    //   }),
    //   providesTags: ["LeaveApplication"],
    // }),

    getLeaveUserPolicyList: builder.query({
      query: () => ({
        url: `leave/user-policy-list`,
        method: "GET",
        headers,
      }),
      providesTags: ["LeaveApplication"],
    }),

    getLeaveApplicationList: builder.query({
      query: () => ({
        url: `/leave/application-list`,
        method: "GET",
        headers,
      }),
      providesTags: ["LeaveApplication"],
    }),

    leaveCheckValidity: builder.mutation({
      query: (leave) => {
        return {
          url: `leave/check-validity`,
          method: "POST",
          body: leave,
          headers,
        };
      },
      invalidatesTags: ["LeaveApplication"],
    }),
    leaveSubmitApplication: builder.mutation({
      query: (leave) => {
        return {
          url: `leave/submit-application`,
          method: "POST",
          body: leave,
          headers,
        };
      },
      invalidatesTags: ["LeaveApplication"],
    }),
  }),
});

export const {
  useLeaveCheckValidityMutation,
  useGetLeaveUserPolicyListQuery,
  useLeaveSubmitApplicationMutation,
  useGetLeaveApplicationListQuery,
} = leaveApplicationApi;
