import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { headers } from "./../utils/ApiHeaders";

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
        headers,
      }),
      providesTags: ["Branch"],
    }),
    branchSaveOrUpdate: builder.mutation({
      query: (branch) => {
        return {
          url: `admin/branch-save-or-update`,
          method: "POST",
          body: branch,
          headers,
        };
      },
      invalidatesTags: ["Branch"],
    }),
  }),
});

export const { useGetBranchListQuery, useBranchSaveOrUpdateMutation } =
  branchApi;
