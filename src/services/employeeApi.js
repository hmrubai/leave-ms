import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";
import { headers } from "./../utils/ApiHeaders";

export const employeeApi = createApi({
  reducerPath: "employeeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
  }),
  tagTypes: ["Employee"],
  endpoints: (builder) => ({
    getCompanyList: builder.query({
      query: () => ({
        url: "admin/company-list",
        method: "GET",

        headers,
      }),
      providesTags: ["Employee"],
    }),
    companySaveOrUpdate: builder.mutation({
      query: (company) => {
        return {
          url: `admin/company-save-or-update`,
          method: "POST",
          body: company,
          headers,
        };
      },
      invalidatesTags: ["Employee"],
    }),

    getDivisionList: builder.query({
      query: () => ({
        url: "division-list",
        method: "GET",

        headers,
      }),
      providesTags: ["Employee"],
    }),
    getDistrictListById: builder.query({
      query: (id) => ({
        url: `district-list/${id}`,
        method: 'GET',
        headers
      }),
      providesTags: ['Employee']
    }),
    getUpazilaListById: builder.query({
      query: (id) => ({
        url: `upazila-list/${id}`,
        method: 'GET',
        headers
      }),
      providesTags: ['Employee']
    }),
    getAreaListById: builder.query({
      query: (id) => ({
        url: `area-list/${id}`,
        method: 'GET',
        headers
      }),
      providesTags: ['Employee']
    }),


  }),
});

export const { useGetCompanyListQuery, useCompanySaveOrUpdateMutation,useGetDivisionListQuery,useGetDistrictListByIdQuery, useGetUpazilaListByIdQuery,useGetAreaListByIdQuery} =
employeeApi;
