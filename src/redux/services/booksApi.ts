import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import {
  BookByFilters,
  IFilters,
  IGenres,
  BookByGenre,
  IBookById,
  ISimilarBooks,
} from "../../interfaces/interfaces";

const BASE_URL = import.meta.env.VITE_BOOKS_BASE_API;
const API_KEY = import.meta.env.VITE_BOOKS_API_KEY;

export const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ["books"],
  endpoints: (builder) => ({
    getBooksByGenre: builder.query<{ books: [BookByGenre[]] }, IGenres>({
      query: (genre) => ({
        url: "search-books",
        params: {
          ["api-key"]: API_KEY,
          genres: genre,
          ["min-rating"]: 0.1,
          ["max-rating"]: 0.99,
          number: 20,
        },
      }),
      providesTags: () => ["books"],
    }),
    getBooksByTitle: builder.query<
      { books: [BookByFilters[]] },
      string | undefined
    >({
      query: (title) => ({
        url: "search-books",
        params: {
          ["api-key"]: API_KEY,
          query: title,
          number: 10,
        },
      }),
      providesTags: () => ["books"],
    }),
    getBooksByFilters: builder.query<
      { available: number; books: [BookByFilters[]] },
      IFilters
    >({
      query: (filters) => ({
        url: "search-books",
        params: {
          ["api-key"]: API_KEY,
          ...filters,
        },
      }),
      providesTags: () => ["books"],
    }),
    getBookById: builder.query<IBookById, number | undefined>({
      query: (id) => ({
        url: `${id}`,
        params: {
          ["api-key"]: API_KEY,
          id: id,
        },
      }),
      providesTags: () => ["books"],
    }),
    getSimilarBooks: builder.query<ISimilarBooks, number | undefined>({
      query: (id) => ({
        url: `${id}/similar`,
        params: {
          ["api-key"]: API_KEY,
          id: id,
          number: 4,
        },
      }),
      providesTags: () => ["books"],
    }),
  }),
});

export const {
  useGetBooksByGenreQuery,
  useGetBooksByTitleQuery,
  useGetBooksByFiltersQuery,
  useGetBookByIdQuery,
  useGetSimilarBooksQuery,
} = booksApi;
