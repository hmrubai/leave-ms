import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

export const companyApi = createApi({
  reducerPath: "companyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
  }),
  tagTypes: ["Company"],
  endpoints: (builder) => ({
    getCompanyList: builder.query({
      query: () => ({
        url: "admin/company-list",
        method: "GET",

        headers: {
          // 'Content-type': 'application/json; charset=UTF-8',
          Authorization: `Bearer ${Cookies.get("leave_user_token")}`,
        },
      }),
      providesTags: ["Company"],
    }),
    companySaveOrUpdate: builder.mutation({
      query: (company) => {
        return {
          url: `admin/company-save-or-update`,
          method: "POST",
          body:company,
          headers: {
            // 'Content-type': 'multipart/form-data',
            Authorization: `Bearer ${Cookies.get("leave_user_token")}`,
          },
        };
      },
      invalidatesTags: ["Company"],
    }),
  }),
});

export const { useGetCompanyListQuery,useCompanySaveOrUpdateMutation } = companyApi;
