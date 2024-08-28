import { useEffect, useState } from "react";

export const useDebounce = (search: string) => {
  const [debouncedSearch, setDebouncedSearch] = useState<string>("");

  useEffect(() => {
    const handle = setTimeout(() => {
      setDebouncedSearch(search);
    }, 700);

    return () => clearTimeout(handle);
  }, [search]);

  return debouncedSearch;
};
