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

    getCalenderListByYear: builder.query({
      query: (year) => ({
        url: `/admin/calender?year=${year}`,
        method: "GET",
        headers,
      }),
      providesTags: ["Calender"],
    }),

    getYearList: builder.query({
      query: () => ({
        url: `admin/year-list`,
        method: "GET",
        headers,
      }),
      providesTags: ["Calender"],
    }),

    generateCalender: builder.mutation({
      query: (status) => {
        return {
          url: `admin/generate-calender`,
          method: "POST",
          body: status,
          headers,
        };
      },
      invalidatesTags: ["Calender"],
    }),
    updateCalender: builder.mutation({
      query: (status) => {
        return {
          url: `admin/update-calender`,
          method: "POST",
          body: status,
          headers,
        };
      },
      invalidatesTags: ["Calender"],
    }),

    test: builder.query({
      query: (id) => ({
        url: `admin/leave-setting-list/${id}}`,
        method: "GET",
        headers,
      }),
      providesTags: ["Calender"],
    }),

    getDashboardSummary: builder.query({
      query: () => ({
        url: `/dashboard-summary`,
        method: "GET",
        headers,
      }),
      providesTags: ["Calender"],
    }),

    myCalenderLsit: builder.query({
      query: () => ({
        url: `my/calendar-list`,
        method: "GET",
        headers,
      }),
      providesTags: ["Calender"],
    }),
  }),
});

export const {
  useGetDayTypeListQuery,
  useGetWorkingDayStatusListQuery,
  useUpdateWorkingdayStatusMutation,
  useGetCalenderListByYearQuery,
  useGetYearListQuery,
  useGenerateCalenderMutation,
  useUpdateCalenderMutation,
  useTestQuery,
  useGetAcadamicCalenderQuery,
  useMyCalenderLsitQuery,
  useGetDashboardSummaryQuery,
} = calenderApi;
