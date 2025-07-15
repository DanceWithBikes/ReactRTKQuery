import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
  reducerPath: "repositories",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.github.com/" }),
  endpoints: (builder) => ({
    fetchRepositories: builder.query({
      query: ({ query = "stars:>1", page = 1, perPage = 3}) => {
        return {
        url: "search/repositories",
        params: {
          q: query,
          page,
          per_page: perPage,
          sort: "stars",
        },
      }}
    }),
    fetchRepositoryByName: builder.query({
      query: ({ owner, repo }) => `repos/${owner}/${repo}`,
    }),
  }),
});

export default api;
export const {
  useFetchRepositoriesQuery,
  useFetchRepositoryByNameQuery
} = api;
