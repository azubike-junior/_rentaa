import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

/**
 * method to get all categories.
 */
export const category = createApi({
  reducerPath: "categoryPath",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:3002/api/v1/`,
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
  }),
});

export const { useGetCategoriesQuery } = category;
