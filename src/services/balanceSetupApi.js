import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { headers } from "./../utils/ApiHeaders";

export const balanceSetupApi = createApi({
  reducerPath: "balanceSetupApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
  }),
  tagTypes: ["BalanceSetup"],
  endpoints: (builder) => ({
    getBalanceSetupList: builder.query({
      query: (id) => ({
        url: `admin/leave-balance-list/${id}`,
        method: "GET",
        headers,
      }),
      providesTags: ["BalanceSetup"],

    }),

    leaveBalanceUpdate: builder.mutation({
      query: (balance) => {
        return {
          url: `admin/leave-balance-update`,
          method: "POST",
          body: balance,
          headers,
        };
      },
      invalidatesTags: ["BalanceSetup"],
    }),
    leaveSettingManually: builder.mutation({
      query: (balance) => {
        return {
          url: `admin/leave-setting-manually`,
          method: "POST",
          body: balance,
          headers,
        };
      },
      invalidatesTags: ["BalanceSetup"],
    }),




  }),
});

export const {useGetBalanceSetupListQuery ,useLeaveBalanceUpdateMutation,useLeaveSettingManuallyMutation} =
balanceSetupApi;
