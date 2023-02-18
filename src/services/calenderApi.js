import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { headers } from "./../utils/ApiHeaders";

export const calenderApi = createApi({
  reducerPath: "leaveBalanceApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
  }),
  tagTypes: ["Calender"],
  endpoints: (builder) => ({
    getDayTypeList: builder.query({
      query: () => ({
        url: `admin/day-type-list`,
        method: "GET",
        headers,
      }),
      providesTags: ["Calender"],
    }),
    getWorkingDayStatusList: builder.query({
      query: () => ({
        url: `admin/day-status-list`,
        method: "GET",
        headers,
      }),
      providesTags: ["Calender"],
    }),

    updateWorkingdayStatus: builder.mutation({
      query: (status) => {
        return {
          url: `admin/update-day-status`,
          method: "POST",
          body: status,
          headers,
        };
      },
      invalidatesTags: ["Calender"],
    }),


  }),
});

export const {useGetDayTypeListQuery ,useGetWorkingDayStatusListQuery,useUpdateWorkingdayStatusMutation} =
calenderApi;
