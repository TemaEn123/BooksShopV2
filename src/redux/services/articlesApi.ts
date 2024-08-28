import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { IArticle } from "../../interfaces/interfaces";

const BASE_URL = import.meta.env.VITE_ARTICLES_BASE_URL;

export const articlesApi = createApi({
  reducerPath: "articlesApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ["articles"],
  endpoints: (builder) => ({
    getArticles: builder.query<IArticle[], null>({
      query: () => ({
        url: "articles",
      }),
      providesTags: () => ["articles"],
    }),
    getArticleById: builder.query<IArticle, string | undefined>({
      query: (id) => ({
        url: `articles/${id}`,
      }),
      providesTags: () => ["articles"],
    }),
  }),
});

export const { useGetArticlesQuery, useGetArticleByIdQuery } = articlesApi;
