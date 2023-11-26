import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from './../../utils/helper';

/**
 * method to get all categories.
 */
export const queries = createApi({
  reducerPath: "queries",
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}/`,
    prepareHeaders: (headers) => {
      const token = JSON.parse(localStorage.getItem("accessToken") || "{}");
      // console.log(">>>>>>token1", token);
      if (token) {
        headers.set(`authorization`, `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (build) => ({
    getCategories: build.query({
      query: () => `categories`,
    }),
    getGadgets: build.query({
      query: () => `/gadgets?cover=true`,
    }),
  }),
});

export const { useGetCategoriesQuery, useGetGadgetsQuery } = queries;
