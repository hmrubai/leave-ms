import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

export const branchApi = createApi({
  reducerPath: "branchApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
  }),
  tagTypes: ["Branch"],
  endpoints: (builder) => ({
    getBranchList: builder.query({
      query: () => ({
        url: "admin/branch-list",
        method: "GET",

        headers: {
          // 'Content-type': 'application/json; charset=UTF-8',
          Authorization: `Bearer ${Cookies.get("leave_user_token")}`,
        },
      }),
      providesTags: ["Branch"],
    }),
   branchSaveOrUpdate: builder.mutation({
      query: (branch) => {
        return {
          url: `admin/branch-save-or-update`,
          method: "POST",
          body:branch,
          headers: {
            // 'Content-type': 'application/json; charset=UTF-8'

            Authorization: `Bearer ${Cookies.get("leave_user_token")}`,
          },
        };
      },
      invalidatesTags: ["Branch"],
    }),
  }),
});

export const { useGetBranchListQuery,useBranchSaveOrUpdateMutation } = branchApi;
