import { useGetBooksByTitleQuery } from "../../redux/services/booksApi";

export const useSearch = (type: string, debouncedSearch: string) => {
  const { data, isFetching, error } = useGetBooksByTitleQuery(debouncedSearch);

  if (type !== "books" || debouncedSearch.length < 1) return;

  return { data, isFetching, error };
};
