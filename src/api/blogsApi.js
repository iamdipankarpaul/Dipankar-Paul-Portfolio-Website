import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Create a newsApi slice using createApi from Redux Toolkit
const blogsApi = createApi({
  reducerPath: "blogsApi", // Name of the slice in the Redux store
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dev.to/api/articles",
  }),
  endpoints: (builder) => ({
    // Endpoint to fetch blog list
    getBlogList: builder.query({
      query: ({ limit = 10, page = 1 }) =>
        `?username=iamdipankarpaul&per_page=${limit}&page=${page}`,
    }),
  }),
});

// Export the generated hooks for each endpoint
export const { useGetBlogListQuery } = blogsApi;
export default blogsApi;
